import React, { useState, useEffect } from 'react'

import GenericPage from '../../components/GenericPage/GenericPage'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import Modal from '../../components/Modal/Modal'

import './PhotosPage.css'


const PhotosPage = ({ match }) => {

  const [ photosList, setPhotosList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ currentPhoto, setCurrentPhoto ] = useState("")

  useEffect(() => {
    const getPhotos = (albumId) => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(json => {
          setPhotosList(json)
          setIsLoading(false)
        })
    }

    const albumId = match.params.albumId

    if (albumId) {
      getPhotos(albumId)
    }

  }, [match])

  const handleSetCurrentPhoto = (photoUrl) => {
    setCurrentPhoto(photoUrl)
  }

  const removeCurrentPhoto = () => {
    setCurrentPhoto("")
  }

  return (
    <>
      <GenericPage isLoading={isLoading} title="Here are your photos" backPath="/">
        { photosList.map((photo, index) => (
          <PhotoCard key={index} photo={photo} handleClick={handleSetCurrentPhoto}/>
        ))}
      </GenericPage>

      { currentPhoto && <Modal closeModal={removeCurrentPhoto}><img className="photo" alt="currentPhoto" src={currentPhoto}/></Modal>}
    </>
  )
}

export default PhotosPage
