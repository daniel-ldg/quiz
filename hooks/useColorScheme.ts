import { useState, useEffect } from "react";
import chroma from "chroma-js";

interface UseColorSchemeProps {
	baseColor: string;
	shades: number;
	shadingMethod?: "brighten" | "darken" | "saturate" | "desaturate";
}

export const useColorScheme = ({ baseColor, shades, shadingMethod = "brighten" }: UseColorSchemeProps): string[] => {
	const [colorScheme, setColorScheme] = useState<string[]>([]);

	useEffect(() => {
		if (chroma.valid(baseColor) && shades > 0) {
			let scale: chroma.Scale;
			switch (shadingMethod) {
				case "brighten":
					scale = chroma.scale([baseColor, chroma(baseColor).brighten(3)]).mode("lab");
					break;
				case "darken":
					scale = chroma.scale([baseColor, chroma(baseColor).darken(3)]).mode("lab");
					break;
				case "saturate":
					scale = chroma.scale([baseColor, chroma(baseColor).saturate(3)]).mode("lab");
					break;
				case "desaturate":
					scale = chroma.scale([baseColor, chroma(baseColor).desaturate(3)]).mode("lab");
					break;
				default:
					console.error("Invalid shading method");
					scale = chroma.scale([baseColor, baseColor]).mode("lab");
			}
			const colors = scale.colors(shades);
			setColorScheme(colors);
		} else {
			console.error("Invalid base color or number of shades");
			setColorScheme([]);
		}
	}, [baseColor, shades, shadingMethod]);

	return colorScheme;
};
