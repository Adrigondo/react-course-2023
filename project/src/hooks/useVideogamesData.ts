import { useState } from 'react';

/* API: https://rawg.io/apidocs */

class VideogamesParams{
  'page':number=1;
  'page_size':number=10;
  'search':string="";
}
const useVideogamesData = () => {
  const [games, setGames] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>("");

  const fetchVideogames = async (params?: VideogamesParams) => {
    setIsLoading(true);
    try {
      let stringParamsArray:Array<string>=[];
      if(params){
        stringParamsArray=Object.entries(params).map(([key, value])=>{
          return `${key}=${value}`
        });
      }
      let stringParams=stringParamsArray.join('&');
      if(stringParams!=''){
        stringParams='&'+stringParams;
      }
      
      const res = await fetch(`https://api.rawg.io/api/games?key=e5190f36da374820b8ec07396096d1c8${stringParams}`);

      const data = await res.json();
      setGames(data.results);
      
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.error("ASDASDASDSA")
      console.error(error);
      setIsLoading(false);
      setError(error);
    }
  }

  return {
    games,
    error,
    isLoading,
    fetchVideogames
  };
}
export default useVideogamesData;