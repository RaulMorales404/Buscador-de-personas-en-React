import {useState, useEffect}from "react";
import SearchBox from "./components/SearchBox";
import axios from "axios";
import "./style.css"

//importamos el archvio json con datos
import SearchResults from "./components/SearchResults";
export default function Search(){
const [isAtTop,setisAtTop] = useState(false);
const [results, setResults]= useState([]);
const [data, setData] = useState([]);

//mandamos llamar la API  usando useEffect
useEffect(()=>{
    const getUsers  = async ()=>{
        /* ///ejemplo con  await y ussefect 
      const response = await fetch("https://jsonplaceholder.typicode.com/users ");//direccion
      const data = await response.json();//pasamos el archivo jeson a data 
      setData(data); pasamos los datos de la API a la const data*/

      try{/*utilizando axios  para la llamada a ala API*/ 
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(data);
      }catch(err){
        console.error("Algo fallo".err);
      }

      
    };
    getUsers().catch(null);//por que no se quede colgadea en caso de un error 
}, []);


const handleCloseSearch = () =>{
setisAtTop(false);
setResults([]);
}
const handleSearchClick = (searchText)=>{
    setisAtTop(true);
    if(data?.length){
      const searchTextMinus = searchText.toLowerCase();
      console.log(searchTextMinus);
    //iteramos el user data , user data trae todo el js
       const filterData = data.filter((value)=>(
            value.name.toLowerCase().includes(searchTextMinus)  ||
            value.phone.toLowerCase().includes(searchTextMinus)  ||
            value.email.toLowerCase().includes(searchTextMinus) ||
            value.username.toLowerCase().includes(searchTextMinus)
            )
        );
        setResults(filterData);
    }
};
console.log(results);
    return(
        <div className={`search ${isAtTop ? "search--top":"search--center"}`}>
               <SearchBox onSearch={handleSearchClick}
                          onClose={handleCloseSearch} 
                          isSearching={isAtTop}/>
               <SearchResults results={results} isSearching={isAtTop}/>
        </div>
    );
}