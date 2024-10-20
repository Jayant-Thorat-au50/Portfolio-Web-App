import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
// import HomePage from './Components/HomePage'
// import AboutUs from './Components/AboutUs'
// import Projects from './Components/Projects'
// import GitHub from './Components/GitHub'
// import ContactUs from './Components/ContactUs'
// import UseGitHubData from './customLoaders/UseGitHubData'
import { Outlet } from 'react-router-dom'




function App() {

  
  return (
<section className='container-fluid '>
<section className='row  '>
  
<Header/>
<main className=' mx-auto col-lg-10 col-11 main  d-flex justify-content-center align-items-center'>
<Outlet/>


</main>

<Footer/>
</section>

</section>
  )
}

export default App

