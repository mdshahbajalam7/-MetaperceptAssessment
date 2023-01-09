import React from 'react'
import { AiOutlineCopyrightCircle} from "react-icons/ai";
// import { IconName } from "react-icons/bs";
import './footer.css'
function Footer() {
    const handleclick = ()=>{
        document.documentElement.scrollTop=0
    }
  return (
    <div className='footer'>
        <div className='footerdiv'>
        <label className='label'>Copyright <AiOutlineCopyrightCircle/> 2021. All Rights Reserved </label>
        </div>
        <div>
        <button onClick={handleclick} className='btn4'>Back to Top</button>
        </div>
        
    </div>
  )
}

export default Footer