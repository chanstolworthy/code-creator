import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coding from './components/coding/coding_func'
import Creator from './components/code_creator/creator_func'
import Header from './components/header/header'
import RELOAD from './reload.svg'

class App extends Component {
reload(){
  window.location.reload();
}

  render() {
    return (
      <div className="App">

          <Header />
          <Creator />

      </div>
    );
  }
}

export default App;
