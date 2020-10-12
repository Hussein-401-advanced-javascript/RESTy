import React from 'react';
// import Header from './header/header.js';
import Main from './main/main.js';
import Result from './main/results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},

    };
  }

  handleForm = (results) => {
    this.setState({ result: results });
  };
  render() {
    return (
      <>
        <Main handler={this.handleForm} />
        <Result result={this.state.result}/>
      </>
    );
  }
}

export default App;