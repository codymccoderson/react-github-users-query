import React, { Component } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
import UserCard from './components/UserCard';

class App extends Component {

  state = {
    usernameInput: "",
    userInfo: []

  };

  handleChange = event => {
    this.setState({
      usernameInput: event.target.value
    });
  }

  handleSubmit = event => {
      event.preventDefault();
      const username = this.state.usernameInput;
      fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then((result) => {
          this.setState({
            usernameInput: "",
            userInfo: [...this.state.userInfo, result]
        });
      });
  };

  render() {
    const { userInfo } = this.state
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            placeholder="Type in a username here"
            onChange={this.handleChange}
            />
          <button type="submit">Submit</button>
        </form>
        <UserCardList
        listOfAllUsers={userInfo}
        />
      </div>
    );
  };
}

export default App;
