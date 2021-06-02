import {useState}from "react";
import "./style.css"

export default  function SearchBox({onSearch, onClose}){
    const[searchText, setSearchText]= useState(" ");

    return(
        <div className="search-box">
            <h2 className="search-box-title" >Busqueda de personas</h2>
            <div className="search-box-content">
                <label>
                    <input className="search-box-input" value={searchText} onChange={({target:{value}}) => setSearchText(value)}/>
                </label>
                <button onClick={onSearch}> Buscar</button>
                <button onClick={onClose}> Cerrar</button>
            </div>
        </div>

    );
}