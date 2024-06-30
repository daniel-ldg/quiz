import { FaExternalLinkAlt } from "react-icons/fa";
import RoundedCard from "../ui/RoundedCard";

const Footer = () => {
	return (
		<RoundedCard className="flex items-end">
			<a className="btn btn-sm btn-ghost rounded-full text-slate-500 hover:text-black">
				Source Code <FaExternalLinkAlt />
			</a>
		</RoundedCard>
	);
};

export default Footer;
