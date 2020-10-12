import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import App from './App.js';

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header/>
        <App />
        <Footer/>
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));