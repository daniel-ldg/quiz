import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { SVGProps, useMemo } from "react";
import InlineSVG from "react-inlinesvg";
import { useAvatar } from "@/hooks/useAvatar";

interface Props extends Omit<SVGProps<SVGSVGElement>, "onError" | "onLoad"> {
	seed: string;
}

const Avatar: React.FC<Props> = ({ seed, ...svgProps }) => {
	const { svg } = useAvatar({ seed });

	const encodedAvatar = `data:image/svg+xml,${encodeURIComponent(svg)}`;

	return <InlineSVG src={encodedAvatar} {...svgProps} />;
};

export default Avatar;
