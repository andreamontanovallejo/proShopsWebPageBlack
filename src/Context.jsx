import React, { createContext, useState } from 'react'
import Agent from './config'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    () => Agent.currentToken !== null && Agent.currentUser !== null,
  )

  const value = {
    isAuth,
    activateAuth: user => {
      Agent.saveUser(user)
      setIsAuth(true)
    },
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const response = {
  Shared: Context,
  Provider,
  Consumer: Context.Consumer,
}

export default response
