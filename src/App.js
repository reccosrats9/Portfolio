import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Nav from './Components/Nav'
import Skills from './Components/Skills'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className='box' >
          {/* <Skills /> */}
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
