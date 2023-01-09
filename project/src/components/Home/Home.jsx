import React from 'react'
import { useEffect } from 'react'
import './home.css'
import axios from 'axios'
import { useState } from 'react'
import HomeCard from './HomeCard'
// getdata()
function Home() {
  const [getdata,setGetdata]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/Data`)
    .then(({data})=>{
      console.log(data);
      setGetdata(data)
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className='home'>
      <h3 className='class'>Classes</h3>
      <p className='ptags' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, officiis odit illo temporibus expedita itaque laborum eos magnam earum nesciunt.</p>
      <div className='grid'>
        {getdata.map((elem)=>{
          return <HomeCard key={elem.ID} {...elem}/>
        })}
      </div>
   
   </div>
  )
}

export default Home