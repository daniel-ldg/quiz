import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

const GameContainer = () => {
	return (
		<div className="flex flex-col md:flex-row gap-3 h-full">
			<div className="md:w-[70%]">
				<GameBoard />
			</div>

			<div className="md:w-[30%]">
				<ScoreBoard />
			</div>
		</div>
	);
};

export default GameContainer;
