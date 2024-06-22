import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import type { AppProps } from "next/app";
import { PlayerSessionProvider } from "@/context/playerSessionContext";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<PlayerSessionProvider>
			<Navbar />
			<Component {...pageProps} />
		</PlayerSessionProvider>
	);
};

export default App;
