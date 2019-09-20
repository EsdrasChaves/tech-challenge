import React from 'react'

import GenericPage from '../../components/GenericPage/GenericPage'

const UsersPage = () => (
  <>
    <GenericPage title="User Page" backPath="/">
      {['joao', 'jonas', 'esdras', 'pedro'].map(item => <li>{item}</li>)}
    </GenericPage>
  </>
)

export default UsersPage
