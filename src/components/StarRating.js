import React, { Component } from "react";



class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: 0 , nbstar:props.nbstar};
    }
    componentDidUpdate() {
      localStorage.setItem('mystate', JSON.stringify(this.state));
    }
  componentDidMount() {
    const persistState = localStorage.getItem('mystate');
    if (persistState) {
      this.setState(JSON.parse(persistState));
    }
  }
    
  render() {
    return (
        <div>
            <h1>Rating :</h1>
        {[...Array(this.state.nbstar)].map((stars, index) => {
            index += 1;
            return ( 
            <span
                className={index <= (this.state.rating) ? "active" : "disactive"}
                onClick={() => this.setState({ rating: +index})}
            >
                <h1 className="dis">{"\u2605"}</h1>
            </span>
            );
        })}
        </div>
    );
  }
};

export default StarRating;