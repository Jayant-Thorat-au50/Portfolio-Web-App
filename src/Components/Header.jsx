import React from 'react'

function Home() {
    return (
    <div className='d-flex justify-content-center py-3 align-items-center'>
   <div className='col-2 d-flex justify-content-center align-items-center fw-bold'>
    <img src="../public/images.png" alt="" width={50} />
   </div>
    
    <nav className='d-flex col-7 fs-5 text-dark justify-content-center gap-3  align-items-center'>
        <div className='fw-bold '>
            Home
        </div>
        <div className='fw-bold'>

            About
        </div>
        <div className='fw-bold'>

            GitHub
        </div>
        <div className='fw-bold'>

            Projects
        </div>
        <div className='fw-bold'>

            Contact Us
        </div>
        
    </nav>
    
    <div className='col-3 h-100  d-flex align-items-center justify-content-end flex-row'>
        <div className='text-dark  fs-5 fw-bold m-auto '>Log in</div>
        <button className='btn fw-bold fs-5 border-danger border  text-danger'>
            Get Started
        </button>
    </div>
    
    </div>
    )
}

export default Home
