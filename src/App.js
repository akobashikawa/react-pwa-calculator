import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "op": "",
      "display": "",
      "input": "",
      "result": 0
    };

    this.digitHandler = this.digitHandler.bind(this);
    this.opHandler = this.opHandler.bind(this);
  }

  digitHandler(e) {
    let value = e.target.value;
    let input = this.state.input;
    input += (input.length < 23) ? value : "";
    let display = input;
    this.setState({
      "display": display,
      "input": input
    });
  }

  opHandler(e) {
    let op = e.target.value;
    let prevOp = this.state.op;
    let input = this.state.input;
    let display = this.state.display;
    let result = this.state.result;
    switch (op) {
      case "ac":
        result = 0;
        input = "";
        display = input;
        op = "";
        break;
      case "c":
        result = 0;
        input = "";
        display = input;
        break;
      case ".":
        input += (input.indexOf('.') === -1) ? "." : "";
        display = input;
        break;
      case "+":
        result = (prevOp === "") ? 1 * input : result + 1 * input;
        input = "";
        display = result;
        break;
      case "-":
        result = (prevOp === "") ? 1 * input : result - input;
        input = "";
        display = result;
        break;
      case "*":
        result = (prevOp === "") ? 1 * input : (prevOp !== "" ? result : result * input);
        input = "";
        display = result;
        break;
      case "/":
        result = (prevOp === "") ? 1 * input : (prevOp !== "" ? result : result / input);
        input = "";
        display = result;
        break;
      case "=":
        switch (prevOp) {
          case "+":
            result += 1 * input;
            break;
          case "-":
            result -= 1 * input;
            break;
          case "*":
            result *= 1 * input;
            break;
          case "/":
            result /= 1 * input;
            break;
          default:
            break;
        }
        input = result;
        display = result;
        op = "";
        break;
      default:
        break;
    }
    this.setState({
      "op": op,
      "display": display,
      "input": input,
      "result": result
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
            <button className="all-clear mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="ac"> AC </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="clear mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="c"> C </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="mem-plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="m+"> M+ </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="mem-result mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="mr"> MR </button>
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
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="/"> / </button>
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
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="*"> * </button>
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
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="-"> - </button>
          </div>

          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="digit mdl-button mdl-js-button mdl-button--fab" onClick={ this.digitHandler } value="0"> 0 </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="point mdl-button mdl-js-button mdl-button--fab" onClick={ this.opHandler } value="."> . </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="equal mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="="> = </button>
          </div>
          <div className="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col">
            <button className="operator mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={ this.opHandler } value="+"> + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
