import SearchBox from "./components/SearchBox";
import "./style.css"

export default function Search(){
    const handleSearchClick = () => {
        console.log("BUscar");
       
    }
    const handleCloseClick = () => {
       console.log("cerrar");
    }

    return(
        <div className="search">
               <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
        </div>
     
    );
}