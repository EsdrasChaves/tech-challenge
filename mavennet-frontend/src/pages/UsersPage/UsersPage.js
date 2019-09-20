import React, { useState, useEffect } from 'react'

import GenericPage from '../../components/GenericPage/GenericPage'
import UserCard from '../../components/UserCard/UserCard'
import { isAuthenticated } from '../../services/auth'


const UsersPage = ({ history, handleLogin }) => {

  const [ userList, setUserList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const getUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUserList(json)
          setIsLoading(false)
        })
    }

    if (isAuthenticated()) 
      history.push('/albums')
    else
      getUsers()
  }, [history])

  const handleItemClick = (user) => {
    handleLogin(user)
    history.push('/albums')
  }

  return (
    <GenericPage isLoading={isLoading} title="Select a user below">
      { userList.map((user, index) => (
        <UserCard key={index} handleClick={handleItemClick} user={user} />
      ))}
    </GenericPage>
  )
}

export default UsersPage
