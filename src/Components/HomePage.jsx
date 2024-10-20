import React from 'react'

function HomePage() {
    return (
        <>
        
        <div className=' d-flex flex-lg-row flex-column justify-content-center align-items-lg-start align-items-center col-12 '>
      <div className=' col-lg-6 col-12 d-flex  justify-content-center   '>
      <img src="/istockphoto-839214570-612x612.jpg" alt="" height={300} width={450} className=' d-lg-block d-none'/>
      <img src="/istockphoto-839214570-612x612.jpg" alt="" height={200} width={300} className=' d-lg-none d-block'/>
      </div>
     <div className=' col-5 mx-lg-1 mx-auto my-lg-0 my-4  p-lg-2'>
     <p className='h2 text-start'>
        Hi,<br />
        I am Jayant <br />
        A Web Developer
     </p>
    
       </div>
     </div>
      
        
        </>
    )
}

export default HomePage
