import { useState,useEffect }from "react";

const jsonData =[{
  key:"1",
  name:"michi",
},{
  key:"2",
  name:"Max",
},{
  key:"8",
  name:"Alfonso"
}];


const App = () => {
const [isLoading, setIsLoading] = useState(true);

useEffect(() =>{
  setTimeout(()=>{
   setIsLoading(false);
  },3000);

},[]);

  const renderData = () =>{


     return jsonData?.map((value)=>(
          <div key={value.key}>
            <p>{value.name}</p>
          </div>
        ))
  };

    return(
      <div>
        {isLoading ? <h2>is loading..</h2>: renderData()}
      </div>
    );
}

export default App;
