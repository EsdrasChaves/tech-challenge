import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import UsersPage from './pages/UsersPage/UsersPage'
import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Header from './components/Header/Header'

import { login, logout, isAuthenticated, getLoggedUser } from './services/auth'

import './App.css';


function App({ history }) {

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
    history.push('/')
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout} />

      <div className="app__main-content">
        <Switch>
          <Route path="/" exact render={props => <UsersPage {...props} handleLogin={handleLogin} />} />
          <ProtectedRoute path="/albums" exact component={AlbumsPage} />
          <ProtectedRoute path="/albums/:albumId" exact component={PhotosPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
