import GameItem from "./GameItem/GameItem";
import videogames from "src/data/videogames.json";

const GamesList = ({ search }: { search: string }) => {
    const games = videogames;
    console.log(games);

    const filteredGames = games.results.filter((game) => {
        if (game.name.toLowerCase().includes(search.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    })
    const gameItems = filteredGames.map((game: any) => {
        return <GameItem game={game} key={`GamesList-item-${game.id}`}></GameItem>
    })
    return (
        <div>
            {gameItems}
        </div>
    );
}
export default GamesList;