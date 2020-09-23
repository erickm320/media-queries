import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Header/>
        <img src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="responsive"/>
        
      </div>
    )
  }
}
export default App;



