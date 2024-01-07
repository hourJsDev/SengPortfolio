import React, { createContext, useContext } from 'react'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
  return (
   <GlobalContext.Provider value={{}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context
