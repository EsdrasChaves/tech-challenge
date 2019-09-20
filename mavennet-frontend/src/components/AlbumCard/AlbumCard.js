import React from 'react'

import './AlbumCard.css'

const AlbumCard = ({ album, handleClick }) => (
  <li className="album-card" onClick={() => handleClick(album.id)}>
    <i className="fas fa-folder album-card__icon"></i>
    <p className="album-card__title">{album.title}</p>
  </li>
)

export default AlbumCard