import React, { createContext, useContext, useState } from 'react'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
  const [openNav,setOpenNav] = useState(false)
  const [navModal,setNavModal] = useState(true)
  return (
   <GlobalContext.Provider value={{openNav,navModal,setNavModal,setOpenNav}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context
