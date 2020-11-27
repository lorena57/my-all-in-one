import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";
import ContactPage from "./containers/ContactPage";
import GroceryPage from "./containers/GroceryPage";
import IntroPage from "./containers/IntroPage";
import Nav from './components/Nav';


  class App extends Component {
  render() {
    return (

     
        <div>
          <Nav />

          <Switch>
            <Route exact path='/' component={IntroPage} />
            <Route path='/grocery' component={GroceryPage} />
            {/* <Route path='/note' component={NotePage} /> */}
            <Route path='/contact' component={ContactPage} />
          </Switch>

          
          {/* <CommentForm/> */}
          <hr/>
          {/* <Comments/> */}
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

