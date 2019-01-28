import React, { Component } from 'react';

class App extends Component {
  state = { joke: { setup: '', punchline: '' } };

  componentDidMount() {
    fetch('https://joke-api-strict-cors.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ joke: json }));
  }

  render() {
    const { setup, punchline } = this.state.joke;

    return (
      <div className="App">
        <h2>{setup}</h2>
        <br />
        <h3>{punchline}</h3>
      </div>
    );
  }
}

export default App;

// fetch('https://official-joke-api.appspot.com/random_joke')