const GameItem = ({ game }: { game: any }) => {
    return (
        <div className="col col-3">
            <div className="card">
                <img src={game.background_image} alt="" className="card-img-top" />
                <div className="card-body">
                    {game.name}
                </div>
            </div>
        </div>
    );
}
export default GameItem;