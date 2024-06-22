import { usePlayerSession } from "@/context/playerSessionContext";
import Avatar from "./Avatar";
import { IoSaveOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ProfileDropdown = () => {
	const {
		player: { name, avatar },
		setName,
		setAvatar,
	} = usePlayerSession();

	const detailsRef = useRef<HTMLDetailsElement>(null);
	const [localName, setLocalName] = useState(name);
	const [localAvatar, setLocalAvatar] = useState(avatar);

	const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
		const { open: isOpen } = e.currentTarget;
		if (isOpen) {
			setLocalName(name);
			setLocalAvatar(avatar);
		}
	};

	const closeDetails = () => {
		if (detailsRef.current) {
			detailsRef.current.open = false;
		}
	};

	const randomizeLocalAvatar = () => setLocalAvatar(uuidv4());

	const savePlayer = () => {
		setName(localName);
		setAvatar(localAvatar);
		closeDetails();
	};

	return (
		<details ref={detailsRef} onToggle={handleToggle} className="dropdown dropdown-bottom dropdown-end">
			<summary className="btn btn-circle avatar p-1">
				<div className="w-12 rounded-full">
					<Avatar seed={avatar} />
				</div>
			</summary>
			<div className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64 border">
				<div className="card-body">
					<button className="btn btn-circle avatar w-40 h-40 mx-auto p-2" onClick={randomizeLocalAvatar}>
						<div className="w-full rounded-full">
							<Avatar seed={localAvatar} />
						</div>
					</button>
					<input
						type="text"
						placeholder="Nombre"
						className="input input-bordered input-sm text-center"
						value={localName}
						onChange={e => setLocalName(e.target.value)}
					/>
					<button className="btn btn-sm" onClick={savePlayer}>
						<IoSaveOutline />
						Guardar
					</button>
				</div>
			</div>
		</details>
	);
};

export default ProfileDropdown;
