import React, { Component } from "react"
import Directions from "./Directions"
import Input from "./Input"
import Title from "./Title"


class App extends Component{
  render(){
    return(
      <section>
        <Title />
        <Directions />
        <Input />
      </section>
    )
  }
}


export default App