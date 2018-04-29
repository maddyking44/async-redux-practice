import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Form from './Form'
import PuffPage from './PuffPage'


const App = () => (
  <div className='app'>
    <Router>
      <div>
      <Route exact path='/' component={PuffPage}/>
      <Route exact path='/form' component={Form}/>
      </div>
    </Router>
  </div>
)

export default App