import React from 'react';
import './main.scss';
import { If, Then, Else } from '../if';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {},
      method: '',
      url: '',
      request: {}
    };
  }

  // ******************************************

  handleSubmit = async (e) => {
    console.log('hhhhh', this.state.url);

    e.preventDefault();
    this.props.toggleLoading();
    console.log(this.state.url, this.state.methode);
    if (this.state.url && this.state.methode) {

      switch (this.state.methode) {
        case 'get':
          try {
            let raw = await fetch(this.state.url);
            let data = await raw.json();
            let head;
            raw.headers.forEach(value => {
              head = { 'Content-Type': value }
            })
            let results = {
              Headers: head,
              Response: data
            }
            this.props.handler(results);
            this.props.toggleLoading();
            this.props.setHistory(this.state.methode, this.state.url, this.state.body);
          } catch (e) {
            console.log(e);
          }
          break;
        case 'post':
        case 'put':
          if (this.state.body) {
            fetch(this.state.url, {
              method: `${this.state.methode}`,
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: this.state.body
            })
              .then(data => data.json()).then(results => {
                this.props.handler(results);
                this.props.toggleLoading();
                this.props.setHistory(this.state.methode, this.state.url, this.state.body);

              })
          } else {
            alert('please Enter the body');
          }
          break;
        case 'delete':
          fetch(this.state.url, {
            method: `${this.state.methode}`,
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
          })
            .then(() => {
              this.props.handler({ results: 'Item Deleted ...' });
              this.props.toggleLoading();
              this.props.setHistory(this.state.methode, this.state.url, this.state.body);

            })
      }

    }
  }

  // *******************************************


  handleChangeUrl = (e) => {
    const url = e.target.value;
    this.setState({ url })
  }

  handleChangeMethod = (e) => {
    const methode = e.target.value;
    this.setState({ methode })
  }

  handleBody = e => {
    const body = e.target.value;
    this.setState({ body })
  }

  render() {
    return (
      < main className="main">
        <If condition={this.props.fill.url}>
          <Then>
            <form onSubmit={this.handleSubmit}>
              <label className="url">
                <span>URL:</span>
                <input type="text" id="url" onChange={this.handleChangeUrl} value={this.props.fill.url} />
                <input id="submit" type="submit" value="GO!" />
              </label>
              <label className="method">
                <If condition={this.props.fill.method === 'get'}>
                  <Then>
                    <input onChange={this.handleChangeMethod} defaultChecked type="radio" id="get" name="methode" value="get" />
                    <label>GET</label>
                  </Then>
                  <Else>
                    <input onChange={this.handleChangeMethod} type="radio" id="get" name="methode" value="get" />
                    <label>GET</label>
                  </Else>
                </If>
                <If condition={this.props.fill.method === 'post'}>
                  <Then>
                    <input onChange={this.handleChangeMethod} defaultChecked type="radio" id="post" name="methode" value="post" />
                    <label>POST</label>
                  </Then>
                  <Else>
                    <input onChange={this.handleChangeMethod} type="radio" id="post" name="methode" value="post" />
                    <label>POST</label>
                  </Else>
                </If>
                <If condition={this.props.fill.method === 'put'}>
                  <Then>
                    <input onChange={this.handleChangeMethod} defaultChecked type="radio" id="put" name="methode" value="put" />
                    <label>PUT</label>
                  </Then>
                  <Else>
                    <input onChange={this.handleChangeMethod} type="radio" id="put" name="methode" value="put" />
                    <label>PUT</label>
                  </Else>
                </If>
                <If condition={this.props.fill.method === 'delete'}>
                  <Then>
                    <input onChange={this.handleChangeMethod} defaultChecked type="radio" id="delete" name="methode" value="delete" />
                    <label>DELETE</label>
                  </Then>
                  <Else>
                    <input onChange={this.handleChangeMethod} type="radio" id="delete" name="methode" value="delete" />
                    <label>DELETE</label>
                  </Else>
                </If>
                <br />
                <label>
                  <textarea rows="15" cols="50" className="body" value={this.props.fill.body} > </textarea></label>
              </label>
            </form>
          </Then>
          <Else>
            <form onSubmit={this.handleSubmit}>
              <label className="url">
                <span>URL:</span>
                <input type="text" id="url" onChange={this.handleChangeUrl} />
                <input id="submit" type="submit" value="GO!" />
              </label>
              <label className="method">
                <input onChange={this.handleChangeMethod} type="radio" id="get" name="methode" value="get" />
                <label>GET</label>
                <input onChange={this.handleChangeMethod} type="radio" id="post" name="methode" value="post" />
                <label>POST</label>
                <input onChange={this.handleChangeMethod} type="radio" id="put" name="methode" value="put" />
                <label>PUT</label>
                <input onChange={this.handleChangeMethod} type="radio" id="delete" name="methode" value="delete" />
                <label>DELETE</label>
                <br />
                <label>
                  <textarea rows="15" cols="50" className="body" onChange={this.handleBody} > </textarea>
                </label>
              </label>
            </form>
          </Else>
        </If>

      </main>
    )

  }
}

export default Form;