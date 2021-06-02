import { useState, Component }from "react";

class App extends Component{

  constructor(props){
    super(props);
    
    console.log("Constructor");

    this.state ={
    name: "",
    };
  }
  
  componentDidMount(){
  console.log("DidMond");
  }
    //se ejecuta por cambio en su componente 
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("DidUpdate");
  }

  //romper la renderizacion del component diUpdate
  shouldComponentUpdate(){
    //return false; para la renderizacion 
      return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate");
  }


  render(){
    return(
      <div>
       <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})} />
      </div>
    );
  }

}
export default App;
