import React, { Component } from "react"


class Input extends Component{
  initialState = {
    current: 0.0,
    newprice: 0.0,
    percentage: 0,
  }
  state = this.initialState
  render(){
    return(
      <section>


<legend>New Price</legend>
        <input type="number" onChange={this.handleChange}  value={this.state.newprice} name="newprice">
        </input>



        <legend>Current Price</legend>
        <input type="number" onChange={this.handleChange} value={this.state.current} name="current">
        </input>

        <input
          type={"button"}
          onClick={this.submitForm}
          value={"Submit"}
        ></input>

        <h1>{this.state.percentage}</h1>
      </section>
    )
  }

  handleChange = (event) =>{
    const {name,value} = event.target

    this.setState({
      [name]: value
    })
  }

  submitForm = () =>{
    this.setState({
      percentage: this.doMath()
    })
  }

  doMath = () =>{
    return((this.state.newprice*100)/this.state.current)
  }
}

export default Input