import {useState}from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"

//importamos el archvio json con datos
import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search(){
const [isAtTop,setisAtTop] = useState(false);
const [userData, setUserData] = useState(data);
const [results, setResults]= useState([]);

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
               <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch}/>
               <SearchResults results={results}/>
        </div>
     
    );
}