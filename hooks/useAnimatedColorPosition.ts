import { ValueAnimationTransition, animate, useMotionValue } from "framer-motion";
import { useMemo } from "react";
import { useEffectOnce } from "./useEffectOnce";
import chroma from "chroma-js";

interface Props {
	initialColor?: string;
	animated?: boolean;
}

export const useAnimatedColorPosition = ({ initialColor = "#ffffff", animated = false }: Props = {}) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const [initialPoint, ...path] = useMemo(() => {
		const numPoints = animated ? 5 : 1;
		return getRandomPath(numPoints);
	}, [animated]);

	useEffectOnce(() => {
		animate(x, initialPoint.x);
		animate(y, initialPoint.y);
		if (animated) {
			const movementTransition: ValueAnimationTransition = {
				duration: 60,
				repeat: Infinity,
				repeatType: "reverse",
			};
			animate(
				x,
				path.map(({ x }) => x),
				movementTransition
			);
			animate(
				y,
				path.map(({ y }) => y),
				movementTransition
			);
		}
	});

	const color = useMotionValue(initialColor);

	const setColor = (newColor: string, transition?: ValueAnimationTransition) => {
		if (chroma.valid(newColor)) {
			animate(color, newColor, transition);
		}
	};

	return { x, y, color, setColor };
};

export interface Coordinates {
	x: number;
	y: number;
}

type GetRandomPath = (length: number, min?: number, max?: number) => Array<Coordinates>;

const getRandomPath: GetRandomPath = (length, min = 0, max = 100) => {
	const randomNumber = () => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const getRandomCoordinate = () => ({ x: randomNumber(), y: randomNumber() });

	const getRandomAngle = () => {
		return Math.random() * 2 * Math.PI; // Random angle between 0 and 2π radians
	};

	const calculateNewPoint: (point: Coordinates, angle: number, distance: number) => Coordinates = (
		{ x: startX, y: startY },
		angle,
		distance
	) => {
		const x = (startX + distance * Math.cos(angle)) | 0;
		const y = (startY + distance * Math.sin(angle)) | 0;
		return { x, y };
	};

	const isPointWithinBounds = ({ x, y }: Coordinates) => {
		return x >= min && x <= max && y >= min && y <= max;
	};

	const distance = 30;
	const points: Coordinates[] = [];
	points.push(getRandomCoordinate());

	if (length > 1) {
		for (let i = 1; i < length; i++) {
			const previousPoint = points[i - 1];
			let newPoint: Coordinates;

			do {
				const angle = getRandomAngle();
				newPoint = calculateNewPoint(previousPoint, angle, distance);
			} while (!isPointWithinBounds(newPoint));

			points.push(newPoint);
		}
	}

	return points;
};
