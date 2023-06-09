import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecuritySection from './components/SecuritySection'
import BuildSaving from './components/BuildSaving'
import AccessInvestment from './components/AccessInvestment'
import BlueCon from './components/BlueCon'
import CustomerSec from './components/CustomerSec'
import Feature from './components/Feature'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SecuritySection/>
      <BuildSaving/>
      <AccessInvestment/>
      <BlueCon/>
      <CustomerSec/>
      <Feature/>
    </>
  )
}

export default App