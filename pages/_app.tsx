import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import type { AppProps } from "next/app";
import { PlayerSessionProvider } from "@/context/playerSessionContext";
import Footer from "@/components/footer/Footer";
import AvatarGradientBackground from "@/components/ui/AvatarGradientBackground";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<PlayerSessionProvider>
			<div className="relative max-w-sm md:max-w-2xl mx-auto flex flex-col gap-3 max-h-screen py-3">
				<Navbar />
				<Component {...pageProps} />
				{/*<Footer />*/}
			</div>
			<AvatarGradientBackground className="fixed -z-50 top-0 h-screen w-screen" />
		</PlayerSessionProvider>
	);
};

export default App;
