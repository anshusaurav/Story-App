import React, { Component } from "react";
import Home from "./components/Home"
import "video-react/dist/video-react.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;