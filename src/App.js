import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'
import Gallery3 from './pages/Gallery3'
import Gallery4 from './pages/Gallery4'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/Chicago7879' component={Gallery1} />
            <Route path='/Downstate' component={Gallery2} />
            <Route path='/Family-run' component={Gallery3} />
            <Route path='/CruiseControl' component={Gallery4} />
            <Route component={Home} />
            <Redirect from='/*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
