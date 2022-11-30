import React, { Component } from "react"


class Input extends Component{
  initialState = {
    oldprice: 0.0,
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



        <legend>Old Price</legend>
        <input type="number" onChange={this.handleChange} value={this.state.oldprice} name="oldprice">
        </input>

        <input
          type={"button"}
          onClick={this.submitForm}
          value={"Submit"}
        ></input>

        {this.printResult()}
      </section>
    )
  }

  printResult = () =>{
    if(this.state.percentage > 0){
      return(<h1> The markup price percentage is {this.state.percentage}</h1>)
    }else if(this.state.percentage < 0){
      return(<h1> The markdown price percentage is {this.state.percentage}</h1>)
    }
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