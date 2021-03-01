import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import './App.css'

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      usersCollection: []
    }
  }

  componentDidMount(){
    axios.get('/api/users')
      .then(res => {
        this.setState({
          usersCollection: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable(){
    return this.state.usersCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h1>Secrets</h1>
        <h2>Users On System</h2>
        <div className="mainUsers">
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Email</td>
                  <td>Password</td>
                </tr>
              </thead>
              <tbody>
                {this.DataTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}