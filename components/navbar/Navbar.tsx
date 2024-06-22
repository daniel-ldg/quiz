import ProfileDropdown from "../profile/ProfileDrodown";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
	return (
		<div className="navbar bg-base-200 border max-w-sm sm:max-w-2xl lg:max-w-3xl rounded-full mx-auto mt-3 shadow-lg">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl rounded-full">daisyUI</a>
			</div>
			<div className="flex-none gap-1">
				<ThemeSelector />
				<ProfileDropdown />
			</div>
		</div>
	);
};

export default Navbar;
