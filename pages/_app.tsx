import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import type { AppProps } from "next/app";
import { PlayerSessionProvider } from "@/context/playerSessionContext";
import BackgroundGradientAnimation from "@/components/ui/BackgroundGradientAnimation";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<PlayerSessionProvider>
			<Navbar />
			<Component {...pageProps} />
			<BackgroundGradientAnimation
				containerClassName="absolute -z-10"
				interactive={false}
				size="70%"
				gradientBackgroundStart="rgb(236, 225, 237)"
				gradientBackgroundEnd="rgb(214, 222, 251)"
				firstColor="252, 203, 222"
				secondColor="210, 230, 252"
				thirdColor="233, 223, 252"
				fourthColor="202, 210, 245"
				fifthColor="186, 190, 242"
				pointerColor="178, 197, 248"
			/>
		</PlayerSessionProvider>
	);
};

export default App;
