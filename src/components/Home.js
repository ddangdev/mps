import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [service, setService] = useState(null);

  function handleClick(e){
    setService(e.target.value)
  }

  useEffect(() => {
    console.log(service)
  }, [service])

  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>left oclumn</h1>
        </div>
        <div className='col' style={{maxHeight: '150px'}}>
          {service ? <ServiceCard selectedService={service} /> : <h1>please click btn</h1>  }
        </div>
        <div className='col'>
          <h1>right oclumn</h1>
        </div>
      </div>


        <div className='d-flex justify-content-center'>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='manicure' onClick={handleClick}>Hands</button>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='pedicure' onClick={handleClick}>Feet</button>
          <button style={{marginLeft: '50px', marginRight: '50px'}} value='waxing' onClick={handleClick}>Waxing</button>
        </div>
      </div>
  )
}



export default Home;
