import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var occupation= this.props.data.occupation;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><p className="visually-hidden">{network.name}</p><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">open burger menu</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">close burger menu</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Lets Build Something Amazing Together</h1>
            <h2 className="banner-occupation">Full-Stack Developer.</h2>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <div className="scrolldown">
         <a className="smoothscroll" href="#about"><p className="visually-hidden">Scroll Down to About</p><i className="icon-down-circle"></i></a>
      </div>

   </header>
    );
  }
}

export default Header;
