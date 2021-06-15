import SearchResultsItem from "./SearResultsitems";
import "./style.css";
export default function SearchResults({ results,isSearching}){
    return(
        <div className="search-results">
            <div className="search-items">
                {!results?.length && isSearching && <p>No existen resutados</p>}
                {results?.map((value)=> <SearchResultsItem key={value.id} {...value}/>)}
          </div>
        </div>
    );
}