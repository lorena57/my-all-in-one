import React, { Component } from 'react'

import { Provider } from "react-redux";
import store from './store'

import Comments from "./components/Comments";
import Commentform from "./components/Commentform";



  class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div>
          <Commentform/>
          <hr/>
          <Comments/>
        </div>
      </Provider>
    )
  }
}

export default App;

