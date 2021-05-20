import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import ScrollSnap from 'scroll-snap';
import './app.css';

function callback() {
  console.log('snapped');
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

  }

  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%',
    });

    snapElement.bind(callback);
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    this.bindScrollSnap();
  }

  render() {
    return (
      <div className="App" ref={this.container}>
        <Header  data={this.state.resumeData.main}/>
        <About  data={this.state.resumeData.main}/>
        <Resume  data={this.state.resumeData.resume}/>
        <Portfolio  data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
