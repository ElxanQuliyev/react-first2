import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
const Footer = () => {
  const myData=useLanguage()
  return (
    <div>Footer</div>
  )
}

export default Footer