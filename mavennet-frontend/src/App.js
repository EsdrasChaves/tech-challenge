import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import UsersPage from './pages/UsersPage/UsersPage'
import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import { login, logout, isAuthenticated, getLoggedUser } from './services/auth'

import './App.css';


function App() {

  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {
    if (isAuthenticated()) {
      const currentUser = getLoggedUser()
      handleLogin(currentUser)
    }
  }, [])

  const handleLogin = user => {
    if (user) {
      console.log('login')
      login(user)
      setCurrentUser(user)
    }
  }

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
  }

  return (
    <div className="App">

      { currentUser ? 
        (<button onClick={e => {
          e.preventDefault()
          handleLogout()
        }}>Logout</button>)
        : (<button onClick={ e =>{
          e.preventDefault()
          handleLogin({
            name: "Esdras"
          })
        }}>Login</button>)
      }

      <div>{JSON.stringify(currentUser)}</div>

      <div className="app__main-content">
        <Switch>
          <Route path="/" exact component={UsersPage} />
          <Route path="/albums" exact component={AlbumsPage} />
          <Route path="/albums/:albumId" exact component={PhotosPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
