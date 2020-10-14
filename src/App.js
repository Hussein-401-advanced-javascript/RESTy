import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

// import './components/css/App.scss'
// import './/components/css/reset.css'
import Footer from './components/footer/footer'
import Header from './components/header/header.js'
import Form from './components/form/form.js'
import Results from './components/results/index'
import History from './components/history/history.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      result: {},
      history:[],
      fill : {}

    };
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  handleForm = (results) => {
    this.setState({ result: results });
  };

  setHistory =(method,url,body)=>{
    let obj = {method,url,body};
    let history = [...this.state.history,obj];
    this.setState({
      history:history
    })
    let hisArray = JSON.stringify(this.state.history);
    localStorage.setItem('history' , hisArray );
  }

  fillFormHandler = (method,url,body) =>{
    this.setState({
      fill: {method,url,body}
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Route exact path='/'>
        <Form fill={this.state.fill} toggleLoading={this.toggleLoading} handler={this.handleForm} setHistory={this.setHistory} />
        <Results result={this.state.result} loading={this.state.loading}/>
        </Route>
        <Route exact path='/history'>
          <History fillFormHandler={this.fillFormHandler}/>
        </Route>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;