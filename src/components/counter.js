
import React, { Component } from 'react';
class Counter extends Component{
constructor(props){
console.log("initialization")
    super(props)
    this.state={counter:0 }
   
}
updatestate = () => {
    localStorage.setItem('load',this.state.counter)
    console.log(localStorage.getItem("load"))
   }

componentDidMount()
{
    const persiststate = localStorage.getItem("load");
    if (persiststate) {
        this.setState({counter:parseInt(window.localStorage.getItem('load'))})
    }
  

}
componentWillUnmount()
{
    console.log("componentWillUnmount")

}
componentDidUpdate()
{  this.updatestate();
    console.log("componentDidUpdate")

}
incriment=()=>{
this.setState({counter:this.state.counter+1});
}
decriment=()=>{
    this.setState({counter:this.state.counter-1});
   
 

    }
render(){
    console.log("Render")
    return(
        <div >
            <h1> counter: {this.state.counter}</h1>
            <div>
                <button onClick={this.incriment}>+</button>
                <button disabled={this.state.counter===0}  onClick={this.decriment} >-</button>
            </div>
        </div>
    );
}

     
}
export default Counter;