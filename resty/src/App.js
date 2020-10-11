import React from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Main from './main/main.js';


class App extends React.Component {
          render() {
    return (
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
    )
  }
}

export default App;