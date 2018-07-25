import React from 'react';
import Href from '../helper/Hreflink'

class Hamburger extends React.Component {
  render () {
    return (
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
    )
  }
}

class MenuElements extends React.Component {
  render (){
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Href classLink="nav-link" pathLink="/" name="Home"/>
            </li>
            <li className="nav-item">
              <Href classLink="nav-link" pathLink="/about" name="About"/>
            </li>
            <li className="nav-item">
              <Href classLink="nav-link" pathLink="/contact" name="Contact"/>
            </li>
          </ul>
        </div>
    )
  }
}

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <Href classLink="navbar-brand" pathLink="/" name="Start Bootstrap"/>
        <Hamburger />
        <MenuElements />
        </div>
      </nav>
    );
  }
}
export default Navbar;
