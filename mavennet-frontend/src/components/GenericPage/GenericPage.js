import React from 'react'
import { Link } from 'react-router-dom'

import WithLoading from '../WithLoading/WithLoading'

import './GenericPage.css'


const GenericPage = ({ children, title, backPath }) => {
  return (
    <div className="container generic-page__container">
      <h2 className="generic-page__title">{title}</h2>
      { backPath && <Link to={backPath} className="generic-page__back-message"><i className="fas fa-long-arrow-alt-left generic-page__back-icon"></i> <span className="generic-page__back-title">Go back</span></Link>}
      <ul className="generic-page__list">
        { children }
      </ul>
      
      { children.length === 0 && <span className="generic-page__not-found-message">There is no results for that :(</span>}
    </div>
  )
}

export default WithLoading(GenericPage)
