import React, { useEffect, useState } from 'react'

import GenericPage from '../../components/GenericPage/GenericPage'
import AlbumCard from '../../components/AlbumCard/AlbumCard'

import { getLoggedUser } from '../../services/auth'

const AlbumsPage = ({ history, match }) => {

  const [ albumsList, setAlbumsList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const getAlbums = userId => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(json => {
          setAlbumsList(json)
          setIsLoading(false)
        })
    }

    const currentUser = getLoggedUser()

    if (currentUser) {
      const userId = currentUser.id

      getAlbums(userId)
    }

  }, [])

  const handleItemClick = (albumId) => {
    history.push(`${match.url}/${albumId}`)
  }

  return (
    <GenericPage isLoading={isLoading} title="Here are your albums">
      { albumsList.map((album, index) => (
        <AlbumCard key={index} album={album} handleClick={handleItemClick}/>
      ))}
    </GenericPage>
  )
}

export default AlbumsPage
