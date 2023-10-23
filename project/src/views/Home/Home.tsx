import Header from "src/components/Header/Header";
import GamesList from "../GamesList/GamesList";
import { useEffect, useState } from "react";
import useVideogamesData from "src/hooks/useVideogamesData";

const Home = () => {
    const [search, setSearch] = useState('');
    const {games, fetchVideogames} = useVideogamesData();
    console.log(games);

    useEffect(() => {
        fetchVideogames('&page_size=30&page=1');
    }, [])
    
    const handleChange = (event: any) => {
        setSearch(event.target.value)
        console.log(search);
        fetchVideogames(`&search=${search}`);
    }
    return (
        <div>
            <Header
                search={search}
                onSearch={handleChange}
            >
                <h1 className=''>
                    Home
                </h1>
            </Header>
            <GamesList search={search} games={games}></GamesList>
        </div>
    );
}
export default Home;