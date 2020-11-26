import React, { Component } from 'react'

import { Provider } from "react-redux";
import store from './store'

import Posts from "./components/Posts";
import Commentform from "./components/Commentform";



  class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div>
          <Commentform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    )
  }
}

export default App;

