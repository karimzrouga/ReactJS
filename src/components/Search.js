import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, search: "", filter: "" , res:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem('statedata1', JSON.stringify(this.state.search));
    localStorage.setItem('statedata2', JSON.stringify(this.state.filter));
console.log(localStorage.getItem('statedata1'))
console.log(localStorage.getItem('statedata2'))
  }
componentDidMount() {
  const persistState1 = localStorage.getItem('statedata1');
  const persistState2 = localStorage.getItem('statedata2');
  if (persistState1 && persistState2) {
  this.setState({filter:JSON.parse(persistState2) , search: JSON.parse(persistState1)})
  }
  
}
  select(elt) {
    switch (this.state.filter) {
      case "name":
        return elt.name;
      case "age":
        return elt.age;
      case "email":
        return elt.email;
      case "gender":
        return elt.gender;
      case "phone":
        return elt.phone;
      case "address":
        return elt.address;
      case "balance":
        return elt.balance;
      case "likes":
        return elt.likes;
      case "rating":
        return elt.rating;
      default:
        return "";
    }
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleSubmit = () => {
    console.log(this.state.search);
    console.log(this.state.filter);
  };

  star(elt) {
    return Array.from({ length: elt }, () => (
      <span className="active">{"\u2605"}</span>
    ));
  }

  render() {
    return (
      <div>
        <div className="myform">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="search"
            onChange={this.handleChange}
          ></input>
          <select
            name="filter"
            id="filter-select"
            value={this.state.filter}
            onChange={this.handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="gender">gender</option>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
            <option value="phone">phone</option>
            <option value="address">address</option>
            <option value="balance">balance</option>
            <option value="likes">likes</option>
            <option value="rating">rating</option>
          </select>
          <input
            type="submit"
            id="search_submit"
            value="filter Option"
            onClick={this.save}
          ></input>
        </div>

        {
          <ul>
            {this.state.filter && this.state.search ? (
              this.state.data
                // eslint-disable-next-line eqeqeq
                .filter((elt) => this.select(elt) == this.state.search)
                .map((elt) => (
                  <div class="mysearch">
                    <p>
                      <span>Full name :</span>
                      {elt.name}
                    </p>
                    <p>
                      {" "}
                      <span>Age:</span> {elt.name}
                    </p>
                    <p>
                      <span>Address:</span> {elt.address}
                    </p>
                    <p>
                      <span>Phone:</span> {elt.phone}
                    </p>
                    <p>
                      <span>Email:</span> {elt.email}
                    </p>
                    <p>
                      <span>Balance:</span> {elt.balance}
                    </p>
                    <p>
                      <span>Likes:</span> {elt.likes} ,<span>Rating:</span>
                      {this.star(elt.rating)}
                    </p>
                  </div>
                ))
            ) : (
              <p>Empty</p>
            )}
          </ul>
        }
      </div>
    );
  }
}
export default Search;
