import React, { Component } from 'react'

import { Provider } from "react-redux";
import store from './store'

import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";

import IntroPage from "./containers/IntroPage";



  class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div>
          <IntroPage/>
          <CommentForm/>
          <hr/>
          <Comments/>
        </div>
      </Provider>
    )
  }
}

export default App;

