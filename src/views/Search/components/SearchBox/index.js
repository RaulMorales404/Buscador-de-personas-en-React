import {useState}from "react";
import "./style.css"

export default  function SearchBox({onSearch, onClose}){
    const[searchText, setSearchText]= useState(" ");
    const handleSearchClick =() =>{
        setSearchText(" ");
        onClose();


    };


    return(
        <div className="search-box">
            <h2 className="search-box-title" >Busqueda de personas</h2>
            <div className="search-box-content">
                <label>
                    <input className="search-box-input" value={searchText} onChange={({target:{value}}) => setSearchText(value)}/>
                </label>
                <button onClick={()=>onSearch(searchText)}> Buscar</button>
                <button onClick={handleSearchClick}> Cerrar</button>
            </div>
        </div>

    );
}