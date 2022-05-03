import React, { createContext, useContext } from 'react'


const LanguageContext=createContext();
export const LanguagePrivader = ({children}) => {
  return (
    <LanguageContext.Provider value={"AZ"}>
        {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage=()=>useContext(LanguageContext)
