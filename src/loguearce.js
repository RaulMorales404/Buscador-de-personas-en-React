import { useState }from "react";

const App = () => {

const [user, setUser] = useState("");
const [password, setPassword] = useState("");
const [isLogged, setIsLogged] = useState(false);

const handleLoginClick = () =>{
  setIsLogged(true);
};


    return(
      <div>
        <label>
          Usuario
          <br/>
          <input value={user} onChange={({target: {value}}) => setUser(value)}/>
        </label>
        <br/>
        <br/>
        <label>
          Contraseña
          <br/>
          <input type="password" value={password} onChange={({target: {value}}) => setPassword(value)} />
        </label>
        <br/>
        <br/>
        <button onClick={handleLoginClick} >Iniciar sesión</button>
        { isLogged && <h2>Logeado exitozamente</h2> }
      </div>
    );
}

export default App;
