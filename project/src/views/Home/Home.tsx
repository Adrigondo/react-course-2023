import Header from "src/components/Header/Header";
import GamesList from "../GamesList/GamesList";
import { useEffect, useState } from "react";
import useVideogamesData from "src/hooks/useVideogamesData";

const Home = () => {
    const [search, setSearch] = useState('');
    const {games, fetchVideogames}=useVideogamesData();

    useEffect(()=>{
        fetchVideogames({page: 1, page_size:20, search: search});
        console.log("A");
        
    }, [setSearch]);

    const handleSearch = (event: any) => {
        setSearch(event.target.value)
        console.log(search);
        // fetchVideogames({page: 1, page_size:20, search: search});
    }
    return (
        <div>
            <Header
                search={search}
                onSearch={handleSearch}
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