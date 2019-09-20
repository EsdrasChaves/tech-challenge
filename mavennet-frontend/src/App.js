import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import UsersPage from './pages/UsersPage/UsersPage'
import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import './App.css';


function App() {
  return (
    <div className="App">

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
