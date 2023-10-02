import GameItem from "./GameItem/GameItem";
import videogames from "src/data/videogames.json";

const GamesList = () => {
    const games = videogames;
    console.log(games);

    const gameItems = games.results.map((game: any) => {
        return <GameItem game={game}></GameItem>
    })
    return (
        <div>
            Games List
            {gameItems}
        </div>
    );
}
export default GamesList;