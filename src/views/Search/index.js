import {useState}from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"

export default function Search(){
    const[isAtTop,setisAtTop] = useState(false);
const handleCloseOpenSearch = () => setisAtTop(!isAtTop);

    return(
        <div className={`search ${isAtTop ? "search--top":"search--center"}`}>
               <SearchBox onSearch={handleCloseOpenSearch} onClose={handleCloseOpenSearch}/>
        </div>
     
    );
}