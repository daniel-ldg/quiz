import { useEffect } from "react";
import { useLocalStorage } from "./localStorage/useLocalStorage";

const useDarkMode = (): [boolean, (value: boolean | ((prevState: boolean) => boolean)) => void] => {
	const [isDarkMode, setDarkMode] = useLocalStorage<boolean>({
		key: "dark_mode",
		defaultValue: false,
		deserialize: value => value === "true",
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	return [isDarkMode, setDarkMode];
};

export default useDarkMode;
