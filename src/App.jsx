import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecuritySection from './components/securitySection'
import BuildSaving from './components/BuildSaving'
import AccessInvestment from './components/AccessInvestment'
import BlueCon from './components/BlueCon'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SecuritySection/>
      <BuildSaving/>
      <AccessInvestment/>
      <BlueCon/>
    </>
  )
}

export default App