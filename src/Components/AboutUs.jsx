import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'


function AboutUs() {
    return (
        <>
<div className=' d-flex flex-lg-row flex-column justify-content-center align-items-center about-bg py-4 col-12 '>
<div className=' col-lg-6 col-12 d-flex  justify-content-center  '>
           <img src="/download2.jpeg" alt="" height={300} width={400} className=' d-lg-block d-none'/>
      <img src="/download2.jpeg" alt="" height={200} width={300} className=' d-lg-none d-block'/>
            </div>
         <div className=' col-5'>
         <h1>
                Full Stack Developer
             </h1>
             <p className='h4 text-light'>
             My passion is creating full stack solutions that are robust, scalable, and have excellent backend functionality and user experiences.
             </p>
         </div>
           
         </div>
   
 
        </>
    )
}

export default AboutUs
