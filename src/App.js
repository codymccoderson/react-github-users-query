import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit () {
      alert("Form submitted!");
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
            type="text"
            value={this.state.input}
            placeholder="Type in a username here"
            onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>Hello World</p>
      </div>
  );
}
}

export default App;
