import React from 'react';
// import Header from './header/header.js';
import Main from './main/main.js';
import Result from './main/results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      history: [],

    };
  }
  setHistory = (method, url, body) => {

    let object = { method, url, body };
    let history = [...this.state.history, object]
    this.setState({ history });

    let historyArray = JSON.stringify(this.state.history);
    localStorage.setItem('historyArray', historyArray);


  }
  handleForm = (result) => {
    this.setState({ result: result });
  };

  render() {
    return (
      <>
        <Main setHistory={this.setHistory} handler={this.handleForm} toggle={this.toggleLoading} />
        <Result results={this.state.result}/>
      </>
    );
  }
}

export default App;