import React, { Component } from "react"


class Input extends Component{
  initialState = {
    oldprice: null,
    newprice: null,
    percentage: null,
  }
  state = this.initialState
  render(){
    return(
      <section>


<legend>New Price</legend>
        <input type="number" onChange={this.handleChange}  value={this.state.newprice} name="newprice">
        </input>



        <legend>Old Price</legend>
        <input type="number" onChange={this.handleChange} value={this.state.oldprice} name="oldprice">
        </input>

        <input
          type={"button"}
          onClick={this.submitForm}
          value={"Submit"}
        ></input>

        {this.printResult()}
        <h1>The formula used to calculate the percentage is ((NewPrice-OldPrice)/OldPrice)x100</h1>
      </section>
    )
  }

  printResult = () =>{
    return(<h1>The rate is {this.state.percentage}%</h1>)
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
    return(((this.state.newprice-this.state.oldprice)/this.state.oldprice)*100)
  }
}

export default Input