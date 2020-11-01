import React, { Component } from "react";
import Home from "./components/Home"
import Story from "./components/Story";
import StoryContainer from "./components/StoryContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <StoryContainer />
      </div>
    );
  }
}

export default App;