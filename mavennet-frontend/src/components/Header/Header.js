import React from 'react'
import { withRouter } from 'react-router-dom'

import './Header.css'


const Header = ({ currentUser, handleLogout, history }) => (
  <header className="header">
    <div className={`container header__container ${!currentUser && 'header__container--centered'}`}>
      <h1 className="header__logo" onClick={() => history.push('/')}><span>Mavennet</span> Album</h1>
      { currentUser && (
        <div className="header__right-content">
          <p className="header__welcome">Welcome, {currentUser.name}!</p>
          <button 
            className="button button--icon header__logout-button"
            onClick={handleLogout}>
              <i className="fas fa-sign-out-alt icon-button__icon"></i>
              <span className="button__text">Logout</span>
          </button>
        </div>
      )}
    </div>
  </header>
)

export default withRouter(Header)
