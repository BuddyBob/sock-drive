import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { HashRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Paypal from './components/PaypalMethod/Paypal'
class App extends Component {
    render() {
      return (
        <div className="app" basename='/index.html'>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/paypal-payment" component={Paypal}/>
            </Switch>
          </Router>
        </div>
      );
    }
}
//dummy comment
export default App
