import { usePlayerSession } from "@/context/playerSessionContext";
import { useAnimatedColorPosition } from "@/hooks/useAnimatedColorPosition";
import { useAvatar } from "@/hooks/useAvatar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MotionStyle, ValueAnimationTransition, motion, useMotionTemplate } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
	className?: string;
}

const AvatarGradientBackground: React.FC<Props> = ({ children, className }) => {
	const {
		player: { avatar: seed },
	} = usePlayerSession();
	const { backgroundColor } = useAvatar({ seed });

	const circle1 = useAnimatedColorPosition();
	const circle2 = useAnimatedColorPosition();
	const circle3 = useAnimatedColorPosition();
	const circle4 = useAnimatedColorPosition();
	const circle5 = useAnimatedColorPosition();
	const circle6 = useAnimatedColorPosition();

	const colorScheme = useColorScheme({ baseColor: backgroundColor, shades: 6 });

	useEffect(() => {
		const circles = [circle1, circle2, circle3, circle4, circle5, circle6];
		const randomSort = () => 0.5 - Math.random();
		const colors = colorScheme.toSorted(randomSort);
		const totalTransitionTime = 3;
		const delays = Array.from({ length: 6 }, (_, i) => (totalTransitionTime / (6 - 1)) * i);
		delays.sort(randomSort);
		circles.forEach((circle, i) => {
			const color = colors[i];
			const transition: ValueAnimationTransition = { duration: 1, ease: "linear", delay: delays[i] };
			circle.setColor(color, transition);
		});
	}, [backgroundColor, circle1, circle2, circle3, circle4, circle5, circle6, colorScheme]);

	const style: MotionStyle = {
		background: useMotionTemplate`radial-gradient(at 59% 98%, ${circle1.color} 0px, transparent 50%),
            radial-gradient(at 92% 5%, ${circle2.color} 0px, transparent 50%),
            radial-gradient(at 24% 85%, ${circle3.color} 0px, transparent 50%),
            radial-gradient(at 65% 78%, ${circle4.color} 0px, transparent 50%),
            radial-gradient(at 40% 52%, ${circle5.color} 0px, transparent 50%),
            radial-gradient(at 37% 3%, ${circle6.color} 0px, transparent 50%)`,
		opacity: 0.15,
	};

	return (
		<motion.div style={style} className={className}>
			{children}
		</motion.div>
	);
};

export default AvatarGradientBackground;
