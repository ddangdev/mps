import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [service, setService] = useState('');

  function handleClick(e){
    setService(e.target.value)
  }

  useEffect(() => {
    console.log(service)
  })

  return(
    <div className='container'>
      <p className='display-2'>Welcome to Mani Pedi Spa</p>
      <div>
        <div style={{maxHeight: '150px'}}>
          <ServiceCard selectedService={service} className='display-1'/>
        </div>
        <div className='d-flex justify-content-center'>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='manicure' onClick={handleClick}>Hands</button>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='pedicure' onClick={handleClick}>Feet</button>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='waxing' onClick={handleClick}>Waxing</button>
        </div>
      </div>
    </div>
  )
}



export default Home;
