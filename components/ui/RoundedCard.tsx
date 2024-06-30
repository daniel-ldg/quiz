import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	className?: string;
}

const RoundedCard: React.FC<Props> = ({ className, children }) => {
	const cardClassName = cn("card card-compact bg-white border rounded-[2rem]", className);
	return (
		<div className={cardClassName}>
			<div className="card-body">{children}</div>
		</div>
	);
};

export default RoundedCard;
