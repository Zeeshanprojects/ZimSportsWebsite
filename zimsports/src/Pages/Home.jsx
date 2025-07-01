import React, { useEffect } from 'react'
import '../assets/CSS/Home.css'
import Image from '../assets/Images/image'

export default function Home() {
    useEffect(()=>{
        document.title="Home | Zim Sports"
    })
  return (
<>
<div className='container'>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
            <h1>Zim Sports: Experience Every Game,<span>Anywhere, Anytime</span> </h1>
            <p>Live-stream, capture, and relive every moment of your clubʼs journey—powered by Zim Sports Technologies.</p>
            <input type='email' placeholder='Enter Your Email'/>
            <button type='button' className='btn primary-btn ps-5 pe-5 ms-3'>Start Now</button>
        </div>
        
             <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <div className='backgroundimagebanner'></div>
           <img src={Image.bannerright} alt='banner-right'/>
       
        </div>
       
    </div>
</div>
</>
  )
}
