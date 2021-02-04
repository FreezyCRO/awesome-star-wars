//COURSE SECTION 1

/*import './App.css';


import Card from './Card.js';
import './Card.css';


function App() {
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;*/


//COURSE SECTION 2.1

/*import React, { Component } from 'react';

import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import './events/Events.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputEvents />
        <MovementEvents />
      </div>
    );
  }
}

export default App;*/

//COURSE SECTION 2.2

/*import React, { Component } from 'react';

import FormValidation from './FormValidation'
import './events/Events.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <FormValidation />
      </div>
    );
  }
}

export default App;*/

//COURSE SECTION 2.3

/*import React, { Component } from 'react';

import ShoppingList from './shoppingList/ShoppingList'
import './shoppingList/ShoppingList.css'


class App extends Component {
  render(){
    return (
      <div className="App">
        <ShoppingList />
      </div>
    )
  }
}

export default App;*/

//COURSE SECTION 3.1

/*import React, { Component } from 'react';

import CardStateful from './addressBook/examples/CardStateful'
import CardStateless from './addressBook/examples/CardStateless'



class App extends Component {
  render(){
    return (
      <div className="App">
        <CardStateful food="Pizza"/>
        <CardStateless food="Ramen"/>
      </div>
    );
  }
}

export default App;*/

//COURSE SECTION 3.2

/*import React, { Component } from 'react';

import AdressBook from './addressBook/AddressBook'
import CardHooks from './addressBook/CardHooks'

class App extends Component{
  render() {
    return (
      <div className="App">
      <CardHooks />
      <AdressBook />
      </div>
    );
  }
}

export default App;*/

//COURSE SECTION 4.2

/*import React, { Component } from 'react';

import AdressBook from './addressBook/AddressBook';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
  Redirect
} from 'react-router-dom'
import './Default.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }

    this.doLogIn = this.doLogIn.bind(this)
    this.doLogOut = this.doLogOut.bind(this)
  }

  doLogIn() {
    this.setState({
      authenticated: true
    })
  }

  doLogOut() {
    this.setState({
      authenticated: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/123">About John</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Switch>
            /*<Route exact path="/" component={Home}/>

            <Route exact path="/" render={() => {
              return (
                this.state.authenticated ? (
                  <Redirect to="/account" />
                ) : (
                  <>
                  <Home />
                  <p>Please log in !</p>
                  <button onClick={this.doLogIn}>Log in</button>
                  </>
                )
              )  
            }} />


            {/*<Route exact path="/account" component={Account}/>*}/

            <Route exact path="/account" render={() => {
              return (
                this.state.authenticated ? (
                  <>
                  <Home />
                  <p>Welcome back !</p>
                  <button onClick={this.doLogOut}>Log out</button>
                  </>
                ) : (
                  <Redirect to="/" />
                  
                )
              )  
            }} />

            <Redirect from="/about/:userId" to="/info/:userId" />
            <Route path="/info/:userId" component={About}/>

            <Redirect from="/about" to="/info" />
            <Route path="/info" component={About}/>

            <Route path="/contact" component={Contact}/>
          
            
            <Route component={Error}/>
        </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './Default.css';

import Home  from './components/Home'
import Error from './components/Error'
import Nav from './starWars/Nav'
import Vehicle from './starWars/Vehicle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Star Wars Vehicles</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <hr />
            <Nav />
          <hr />
        

          <Switch>
            <Route exact path="/" component={Home} />

             <Route path="/vehicle/:vehicleId" component={Vehicle}/>
            

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;