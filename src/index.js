import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

import { Header, Footer } from './components'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Single from './components/Single'
import Search from './components/Search'

import Admin from './components/Admin'
import Create from './components/admin/Create'
import Edit from './components/admin/Edit'
import Delete from './components/admin/Delete'

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route path='/post/:slug'>
          <Single />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/admin/create'>
          <Create />
        </Route>
        <Route exact path='/admin/edit/:id' children={<Edit />} />
        <Route exact path='/admin/delete/:id' children={<Delete />} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
