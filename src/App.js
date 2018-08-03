import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Lets go SHOPPING!</h1>
       <hr/>
       <div className='buttons'>
       <Link to='/store'><button className='storebtn'>Store</button></Link>
       <Link to='/cart'><button className='cartbtn'>Cart</button></Link>
      </div>
      </div>
    );
  }
}

export default App;
