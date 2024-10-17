import React from 'react'
import NavEle from './NavEleFooter/NavEle'

function Footer() {
    return (
        <div className='col-12 d-flex justify-content-between align-items-center text-warning fs-5 fw-bold'>
    
        <div className=' col-5 border border-dark border-2 d-flex justify-content-start align-items-center'>
            <img src="../public/images.png" alt="" />
        </div>
        <nav className='col-7 '>
            <div className=' border border-2 border-success  d-flex align-items-start justify-content-evenly'>
               <div>
                Resources
               <NavEle
               navType={'Home'}
               />
               <NavEle
               navType={'About'}
               />

               </div>
               <div>
                Follow Us
               <NavEle
               navType={'GitHub'}
               />
               <NavEle
               navType={'Discord'}
               />

               </div>
               <div>
                Legal
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
