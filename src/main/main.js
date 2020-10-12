import React from 'react';
import './main.scss';

//Main
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        method:'',
        // hits:[]
        // count: 0,
        results: {}

      }
     
    }
  
    handleInput = e => {
      e.preventDefault()
      let url = e.target.value;
      this.setState({url}) // re-render 
      
    }
    handleMethod = e => {
      e.preventDefault()
  
      let method = e.target.value;
      this.setState({method}) // re-render   }
    }
    
    // handleClick = e =>{
    //   e.preventDefault()
    //   this.state.hits.push(
    //   <li  key= {this.state.hits.length+1}> <p className='result-method'>{this.state.method}</p>
    //   <p className='result-url'>{this.state.url}</p>
    //   </li> )
    //   let hits= this.state.hits
    //   console.log(this.state.hits);
    //   this.setState({hits}) // re-render   }
    // }
    handleSubmit = async (e) => {
      e.preventDefault();
      if (this.state.url && this.state.method) {
            const raw = await fetch(`${this.state.url}`);
            const data = await raw.json();
            let head ;
            raw.headers.forEach(value =>{
              head = { 'Content-Type': value }
            })          
            let results = {
              Headers: head,
              Response: data
            }
            this.props.handler(results);
         
      }
    };
  
      
    render() {
      return (
        <section id='main-div' >
            
          <form onSubmit={this.handleSubmit}>
            <div id='user-search-div'></div>
              <label className= 'url-label'>URL: </label>
              <input className='url-input' onChange={this.handleInput} />
              <button className='btn-go' type='submit'>GO!!</button>
              <br />
              {/* <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="GET">GET</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="POST">POST</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="PUT">PUT</button>
              <button  onChange={this.handleMethod} className='method-input' name={this.state.method} value="DELETE">DELETE</button> */}
              <input className='method-input' onChange={this.handleMethod} type="radio" id="GET" name={this.state.method} value="GET"/>
              <label htmlFor="GET">GET</label>
  
              <input className='method-input' onChange={this.handleMethod} type="radio" id="POST" name={this.state.method} value="POST"/>
              <label htmlFor="POST">POST</label>
              <input className='method-input' onChange={this.handleMethod} type="radio" id="PUT" name={this.state.method} value="PUT"/>
              <label htmlFor="PUT">PUT</label>
  
              <input className='method-input' onChange={this.handleMethod} type="radio" id="DELETE" name={this.state.method} value="DELETE"/>
              <label htmlFor="DELETE">DELETE</label>
              
          </form>
         
        </section>
  
  
      )
    }
  }
export default Main;
