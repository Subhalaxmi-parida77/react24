import React from 'react'
import './App.css'
import Header from './Header'
import Herosection from './Herosection'
import Cardsection2 from './Cardsection2'
import Page13 from './Page13'
import Service from './Service'
import DoctorSection from './DoctorSection'
import DentistPatientImage from './OurGallery'
import Testimonials from './Testimonials'

function App() {

  return (
    <div className='overflow-hidden'>
  <Header/>
  <Herosection/>
  <Cardsection2/>
  <Page13/>
  <Service></Service>
  <DoctorSection/>
  <DentistPatientImage/>
  <Testimonials/>
  
   
  </div>
  )
}

export default App