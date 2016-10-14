import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "display": ""
    };

    this.digitHandler = this.digitHandler.bind(this);
  }

  digitHandler(e) {
    let value = e.target.value;
    let display = this.state.display;
    display += (display.length < 23) ? value : "";
    this.setState({
      "display": display
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="keys mdl-grid">
          <div className="display mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col">
            <h4>{ this.state.display || "0" }</h4>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="all-clear mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> AC </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="clear mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> C </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="mem-plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> M+ </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="mem-result mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> MR </button>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="7"> 7 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="8"> 8 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="9"> 9 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> / </button>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="4"> 4 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="5"> 5 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="6"> 6 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> * </button>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="1"> 1 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="2"> 2 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="3"> 3 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> - </button>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="0"> 0 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="point mdl-button mdl-js-button mdl-button--fab"> . </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="equal mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> = </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored"> + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
