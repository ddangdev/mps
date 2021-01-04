import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Home = () => {
  const [service, setService] = useState('');

  function handleClick(e){
    setService(e.target.value)
  }

  useEffect(() => {
    console.log(service)
  })

  return(
    <div>
      <p className='container display-2'>Welcome to Mani Pedi Spa</p>
      <div>
        <ServiceCard service={service} className='display-1'/>
        <button style={{marginLeft: '50px', marginRight: '50px'}} value='manicure' onClick={handleClick}>Hands</button>
        <button style={{marginLeft: '50px', marginRight: '50px'}} value='pedicure' onClick={handleClick}>Feet</button>
        <button style={{marginLeft: '50px', marginRight: '50px'}} value='waxing' onClick={handleClick}>Waxing</button>
      </div>
    </div>
  )
}



export default Home;
