import ProfileDropdown from "../profile/ProfileDropdown";

const Navbar = () => {
	return (
		<div className="navbar bg-white border rounded-full mt-3">
			<div className="flex-1">
				<h1 className="text-xl font-bold ml-2">Quiz</h1>
			</div>
			<ProfileDropdown />
		</div>
	);
};

export default Navbar;
