import React from 'react'
import { Link } from 'react-router-dom'

function NavEle({navType,LinkTo}){
    return (
        <div>
        <Link to={LinkTo} >
        
        <p className='text-dark'>{navType}</p>
        </Link>
        </div>
    )
}

export default NavEle