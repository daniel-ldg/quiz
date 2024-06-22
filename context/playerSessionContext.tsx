import { useLocalStorage } from "@/hooks/localStorage/useLocalStorage";
import React, { PropsWithChildren, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const PLAYER_PROFILE_KEY = "session";

export type Player = {
	id: string;
	name: string;
	avatar: string;
};

interface PlayerSessionContext {
	player: Player;
	setName: (name: string) => void;
	setAvatar: (avatar: string) => void;
}

export const PlayerSession = React.createContext<PlayerSessionContext | null>(null);

export const PlayerSessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [playerLocalStorage, setPlayerLocalStorage] = useLocalStorage<Player>({
		key: PLAYER_PROFILE_KEY,
		defaultValue: { id: uuidv4(), name: "Jugador(a)", avatar: uuidv4() },
	});

	const setName: PlayerSessionContext["setName"] = name => setPlayerLocalStorage(player => ({ ...player, name }));

	const setAvatar: PlayerSessionContext["setAvatar"] = avatar =>
		setPlayerLocalStorage(player => ({ ...player, avatar }));

	return (
		<PlayerSession.Provider value={{ player: playerLocalStorage, setName, setAvatar }}>
			{children}
		</PlayerSession.Provider>
	);
};

export const usePlayerSession = () => {
	const context = useContext(PlayerSession);

	if (!context) {
		throw new Error("usePlayerSession must be used inside the PlayerSessionProvider");
	}

	return context;
};
