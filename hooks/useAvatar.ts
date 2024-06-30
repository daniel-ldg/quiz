import { botttsNeutral } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useEffect, useMemo, useState } from "react";

interface Options {
	seed: string;
}

export const useAvatar = ({ seed }: Options) => {
	const [backgroundColor, setBackgroundColor] = useState("#fff");
	const svg = useMemo(() => createAvatar(botttsNeutral, { seed }).toString(), [seed]);

	useEffect(() => {
		const parser = new DOMParser();
		const svgDoc = parser.parseFromString(svg, "image/svg+xml");
		const svgElement = svgDoc.documentElement;

		// Locate the rect element with the specific fill attribute
		const g = svgElement.querySelectorAll('g[mask="url(#viewboxMask)"]').item(0);
		const rect = g.querySelector("rect");

		const backgroundColor = rect?.getAttribute("fill");

		setBackgroundColor(backgroundColor || "#fff"); // Set to '#fff' if no background color is found
	}, [svg]);

	return { svg, backgroundColor };
};
