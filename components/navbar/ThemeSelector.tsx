import useDarkMode from "@/hooks/useDarkMode";
import { IoInvertMode, IoInvertModeOutline } from "react-icons/io5";

const ThemeSelector = () => {
	const [isDarkMode, setIsDarkMode] = useDarkMode();
	const iconSize = 25;

	return (
		<label className="btn btn-circle swap swap-rotate">
			<input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(current => !current)} />
			<IoInvertMode className="swap-on" size={iconSize} />
			<IoInvertModeOutline className="swap-off" size={iconSize} />
		</label>
	);
};

export default ThemeSelector;
