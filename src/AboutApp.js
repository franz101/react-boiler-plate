import React, { Component, Fragment } from 'react';
import logo from './Assets/logo.svg';
import './Assets/App.css';
import {Bar, Header, Footer, SideBar, Main} from './Components/Components'

class AboutApp extends Component {
  render() {
    return (
      <div id='App' className='App-header'>
      <Header>
      <Bar items = {['Home','Menu','Start']}/>
        <h1>Welcome</h1>
        </Header>
        <Main>
          <h1>ITS ME FRANZ</h1>
          </Main>
          <Footer>Franz Krekeler</Footer>
      </div>
    );
  }
}

export default AboutApp;
