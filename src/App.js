import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web App using React Framework for Tabular Printing of Google Sheets</h1>
        </header>
        <div id="employee-details">
          <table id="employees">
            <tr>
              <th>Employee Name</th>
              <th>Favourite Dog</th>
              <th>Image Of Dog</th>
            </tr>
          </table>
          {
            data.map(obj => {
              return (
                <div key={obj.employee}>
                  <table id='employees'>
                    <tr>
                      <td>{obj.employee}</td>
                      <td>{obj.favDog}</td>
                      <td><img alt={obj.favDog} src={obj.img} /></td>
                    </tr>
                  </table>
                </div>
              )
            })
          }
          <table id="employees">
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;