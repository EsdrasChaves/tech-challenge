import React from 'react'

import './PhotoCard.css'


const PhotoCard = ({ photo, handleClick }) => (
  <li className="photo-card">
    <img className="photo-card__image" alt={photo.title} src={photo.thumbnailUrl}/>
    <div className="photo-card__info">
      <p className="photo-card__title">{photo.title}</p>
      <button className="button photo-card__button"  onClick={() => handleClick(photo.url)}>View</button>
    </div>
  </li>
)

export default PhotoCard
