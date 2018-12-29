import React, { Component } from 'react';

export const Bar = (props) =>
(
    <nav>
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    </nav>
)
export const SideBar = (props) =>
(
    <nav>
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    </nav>
)

export const Main = (props) =>
(
    <main>
        <div id='Main'>
            {props.children}
        </div>
    </main>
)

export const Footer = (props) =>
(
    <footer>
           <div id='footer'>
            {props.children}
        </div>
    </footer>
)

export const Header = (props) =>
(
    <header>
    <div id='footer'>
     {props.children}
 </div>
</header>
)