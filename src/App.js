import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bar, Header, Footer, SideBar, Main} from './Components/Components'

class App extends Component {
  render() {
    return (
      <div id='App' className='App-header'>
      <Header>
      <Bar items = {['Home','Menu','Start']}/>
        <h1>Welcome</h1>
        </Header>
        <Main>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </Main>
          <Footer>Franz Krekeler</Footer>
      </div>
    );
  }
}

export default App;
