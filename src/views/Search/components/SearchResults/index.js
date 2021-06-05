import "./style.css";
export default function SearchResults({ results }){
    return(
        <div className="search-results">
            <div  className="search-items">
                {results?.map((value)=>{
            return(
                <div  key={value.id}>
                    <p>{value.name}</p>
                    <p>{value.phone}</p>
                    <p>{value.email}</p>
                </div>
                    );
                })}
          </div>
        </div>
    );
}