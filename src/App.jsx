import React from 'react';
import HelloWorld from './Components/HelloWorld';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = { 
      message: "Hello React Scaffold"
    }
  }

  render () {
    const { message } = this.state

    return (
      <div>
        <h1>ssss</h1>
        <h2>哈哈哈哈</h2>
        <HelloWorld/>
      </div>
    )
  }
    
}
