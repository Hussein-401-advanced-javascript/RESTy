import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.js';

import App from './App';

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));