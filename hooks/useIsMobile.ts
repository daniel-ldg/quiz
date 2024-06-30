import { useState, useEffect } from "react";

interface UseIsMobileOptions {
	breakpoint?: number;
}

export const useIsMobile = (options: UseIsMobileOptions = {}) => {
	const { breakpoint = 768 } = options;

	const [windowWidth, setWindowWidth] = useState<number | undefined>(
		typeof window !== "undefined" ? window.innerWidth : undefined
	);
	const [isMobile, setIsMobile] = useState<boolean>(
		typeof window !== "undefined" ? window.innerWidth < breakpoint : false
	);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const handleResize = (): void => {
			setWindowWidth(window.innerWidth);
			setIsMobile(window.innerWidth < breakpoint);
		};

		window.addEventListener("resize", handleResize);

		// Initial check
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return { width: windowWidth, isMobile };
};
