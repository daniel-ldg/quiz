import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { SVGProps, useMemo } from "react";
import InlineSVG from "react-inlinesvg";

interface Props extends Omit<SVGProps<SVGSVGElement>, "onError" | "onLoad"> {
	seed: string;
}

const Avatar: React.FC<Props> = ({ seed, ...svgProps }) => {
	const avatarSvg = useMemo(() => createAvatar(botttsNeutral, { seed }).toString(), [seed]);

	const encodedAvatar = `data:image/svg+xml,${encodeURIComponent(avatarSvg)}`;

	return <InlineSVG src={encodedAvatar} {...svgProps} />;
};

export default Avatar;
