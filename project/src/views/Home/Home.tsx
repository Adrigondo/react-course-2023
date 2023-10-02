import Header from "src/components/Header/Header";
import GamesList from "../GamesList/GamesList";
import { useState } from "react";

const Home = () => {
    const [search, setSearch] = useState('');
    const handleChange = (event: any) => {
        setSearch(event.target.value)
        console.log(search);
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
            <GamesList search={search}></GamesList>
        </div>
    );
}
export default Home;