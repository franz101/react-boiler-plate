import React, { Component, Fragment } from 'react';
import logo from './Assets/logo.svg';
import './Assets/App.css';
import {Bar, Header, Footer, SideBar, Main} from './Components/Components'
import routes from './Constants/routes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div id='App' className='App-header'>
      <Header>
      <Bar items = {[ <Link to={routes.HOME}>Home</Link>,<Link to={routes.ABOUT}>Home</Link>,'Start']}/>
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
