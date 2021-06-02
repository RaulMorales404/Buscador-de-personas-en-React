import { useState, useEffect }from "react";

const App = () => {

  const [name, setName] = useState(" ");
  const [age, setAge] = useState(0);


   /* componentDiUpdate*/ 
  useEffect(() => {
    console.log(" didUodate effect ");
    return()=>{
     console.log("willUnmonunt");
    };

  },[]);

 /*Component didMount*/ 
  useEffect(()=>{
    console.log("Name cambio");
 
  },[name,age]);

 

    return(
      <div>
       <input value={name} onChange={({target: {value}}) => setName(value)}/>
       <br/>
       <br/>
       <input age={age} onChange={({target: {value}}) => setAge(value)}/>
      </div>
    );
}

export default App;
