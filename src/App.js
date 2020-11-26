import React, { Component } from 'react'

import Posts from "./components/Posts";
import Commentform from "./components/Commentform";

 class App extends Component {
  render() {
    return (
      <div>
        <Commentform/>
        <hr/>
        <Posts/>
      </div>
    )
  }
}

export default App;

