//`` actualiza el estado de un componente useState
import { useState }from "react";

function EjemploLogin() {

  //constantes de estado  set actualiza el valor
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   //eventos
  const handleEmailChange = ({target:{value}}) => setEmail(value);


  const handlePasswordChange = ({target:{value}}) => setPassword(value);


  const handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log(`Usuairo:${email} Password:${password}`);

  };


  return (
    <div className="EjemploLogin">
      <form onSubmit={handleFormSubmit}>
          <h2>Iniciar sesion</h2>
          <label>
              Correo
              <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label >
            Contraseña
            <input type="password" value={password} onChange={handlePasswordChange}/>
          </label>
          <button type="submit" >Iniciar sesion</button>
      </form>
    </div>
  );
}

export default EjemploLogin;
