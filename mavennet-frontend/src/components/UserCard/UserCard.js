import React from 'react'

import './UserCard.css'


const UserCard = ({ user, handleClick }) => (
  <li className="user-card" onClick={() => handleClick(user)}>
    <i className="far fa-user user-card__icon"></i>
    <p className="user-card__info"><span className="user-card__highlight">Name:</span> {user.name}</p>
    <p className="user-card__info"><span className="user-card__highlight">Username:</span> {user.username}</p>
  </li>
)

export default UserCard
