import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'

import { Outlet } from 'react-router-dom'




function App() {

  
  return (
<section className='container-fluid  '>
<section className='row '>
  

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

