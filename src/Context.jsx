import React, { createContext, useContext, useState } from 'react'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
  const [openNav,setOpenNav] = useState(false)
  return (
   <GlobalContext.Provider value={{openNav,setOpenNav}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context
