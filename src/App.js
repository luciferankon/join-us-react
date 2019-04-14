import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("/count")
      .then(res => res.text())
      .then(count => (document.getElementById("count").innerText = count));
  }

  render() {
    return (
      <div>
        <div>
          <div id='count'>0</div>
        </div>
        <form action='/join' method='POST'>
          <input type='text' name='name' required />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
