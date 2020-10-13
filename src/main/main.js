import React from 'react';
import './main.scss';

//Main
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {},
      url: '',
      method: '',
      hits: [],
      // count: 0,
      results: {}

    }

  }

  handleInput = e => {
    e.preventDefault()
    let url = e.target.value;
    this.setState({ url }) // re-render 

  }
  handleMethod = e => {
    e.preventDefault()

    let method = e.target.value;
    this.setState({ method }) // re-render   }
  }


  _handleSubmit = async (e) => {
    e.preventDefault();
    // this.props.toggle();

    if (this.state.method === 'GET') {
      let response  = await fetch(this.state.url, { 
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      let data = await response.json();
      this.props.handler(data.results);
      // this.props.toggle();
      this.props.setHistory(this.state.method,this.state.url,this.state.body);
      console.log('in raw>>>>>>>>>>>>', data);
      return response;
    }
    else if (this.state.method === 'POST' || this.state.method === 'PUT') {
      let response = await fetch(this.state.url, { 
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: this.state.body
      })

      this.props.handler(10, this.state.body);
      // this.props.toggle();
      this.props.setHistory(this.state.method,this.state.url,this.state.body);

    } else if (this.state.method === 'DELETE') {
      let response = await fetch(this.state.url, { 
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })

      this.props.handler(10, 'deleted');

      // this.props.toggle();
    this.props.setHistory(this.state.method,this.state.url,this.state.body);

    }

  }

  handleClick = () => {
    // e.preventDefault()
    this.state.hits.push(
      <li key={this.state.hits.length + 1}> <p className='result-method'>{this.state.method}</p>
        <p className='result-url'>{this.state.url}</p>
      </li>)
    let hits = this.state.hits
    console.log(this.state.hits);
    this.setState({ hits }) // re-render   }
  }


  render() {
    return (
      <section id='main-div' >

        <form onSubmit={this._handleSubmit}>
          <div id='user-search-div'></div>
          <label className='url-label'>URL: </label>
          <input className='url-input' onChange={this.handleInput} />
          <button className='btn-go' onClick={this.handleClick}>GO!!</button>
          <br />

          {/* <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="GET">GET</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="POST">POST</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="PUT">PUT</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="DELETE">DELETE</button> */}
          <input className='method-input' onChange={this.handleMethod} type="radio" id="GET" name={this.state.method} value="GET" />
          <label htmlFor="GET">GET</label>

          <input className='method-input' onChange={this.handleMethod} type="radio" id="POST" name={this.state.method} value="POST" />
          <label htmlFor="POST">POST</label>
          <input className='method-input' onChange={this.handleMethod} type="radio" id="PUT" name={this.state.method} value="PUT" />
          <label htmlFor="PUT">PUT</label>

          <input className='method-input' onChange={this.handleMethod} type="radio" id="DELETE" name={this.state.method} value="DELETE" />
          <label htmlFor="DELETE">DELETE</label>

        </form>
        
        <div className='result'>
          <ul>{this.state.hits}</ul>
          {/* {this.state.hits} */}
        </div>

      </section>


    )
  }
}
export default Main;
