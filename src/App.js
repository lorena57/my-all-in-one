import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'



import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";

import IntroPage from "./containers/IntroPage";
import Nav from './components/Nav';


  class App extends Component {
  render() {
    return (

     
        <div>
        <Nav />

          <IntroPage/>
          <CommentForm/>
          <hr/>
          <Comments/>
        </div>
     
    )
  }
}

// class App extends Component {
//   render() {
//     return (

//       <Provider store={store}>
//         <div>
//           <IntroPage />
//           <CommentForm />
//           <hr />
//           <Comments />
//         </div>
//       </Provider>
//     )
//   }
// }

export default App;

