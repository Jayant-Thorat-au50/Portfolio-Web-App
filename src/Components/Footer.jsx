import React from 'react'
import NavEle from './NavEleFooter/NavEle'
import './Footer.css'

function Footer() {
    return (
        <div className='col-12 py-4  d-flex justify-content-evenly align-items-start  bg-secondary text-warning fs-5 fw-bold'>
    
        <div className=' col-4 d-flex justify-content-center align-items-center'>
            <img src="../public/images.png" alt="" className='footer-img'  />
        </div>
        <nav className='col-7 '>
            <div className='   d-flex align-items-start justify-content-evenly'>
               <div>
               <h4> Resources</h4>
               <NavEle
               navType={'Home'}
               />
               <NavEle
               navType={'About'}
               />

               </div>
               <div>
            <h4>    Follow Us</h4>
               <NavEle
               navType={'GitHub'}
               />
               <NavEle
               navType={'Discord'}
               />

               </div>
               <div>
              <h4>  Legal</h4>
               <NavEle
               navType={'Privacy policy'}
               />
               <NavEle
               navType={'Terms and conditions'}
               />

               </div>
            </div>
        </nav>

        </div>
    )
}

export default Footer
