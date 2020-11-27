import React, { Component } from 'react'



import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";

import IntroPage from "./containers/IntroPage";



  class App extends Component {
  render() {
    return (

     
        <div>
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

