import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import Projects from './Components/Projects'
import GitHub from './Components/GitHub'
import ContactUs from './Components/ContactUs'



function App() {
  return (
<section className='container-fluid '>
<section className='row  '>
  
<Header/>
<main className='    container  col-10 main  d-flex justify-content-center align-items-center'>
<Routes>

  <Route path='/' element={<HomePage/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/GitHub' element={<GitHub/>}/>
  <Route path='/AboutUS' element={<AboutUs/>}/>
  <Route path='/ContactUS' element={<ContactUs/>}/>


</Routes>


</main>

<Footer/>
</section>

</section>
  )
}

export default App

