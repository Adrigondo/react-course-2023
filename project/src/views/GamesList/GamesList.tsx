import GameItem from "./GameItem/GameItem";

const GamesList = ({ search, games }: { search: string, games:Array<any> }) => {
    // const games = videogames;
    // console.log(games);

    // const filteredGames = games.results.filter((game) => {
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
        <div className="row">
            {gameItems}
        </div>
    );
}
export default GamesList;