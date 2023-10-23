import useVideogamesData from "src/hooks/useVideogamesData";
import GameItem from "./GameItem/GameItem";
// import videogames from "src/data/videogames.json";

const GamesList = ({ search, games }: { search: string, games:Array<any> }) => {
    // const filteredGames = games.filter((game:any) => {
    //     if (game.name.toLowerCase().includes(search.toLowerCase())) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })
    const gameItems = games.map((game: any) => {
        return <GameItem game={game} key={`GamesList-item-${game.id}`}></GameItem>
    })
    return (
        <div>
            {gameItems}
        </div>
    );
}
export default GamesList;