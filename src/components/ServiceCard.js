import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const menu = require('./data/data')

const liStyle = {
  fontFamily: 'font-family: priori-sans, sans-serif',
  fontWeight: '700',
  fontStyle: 'normal',

  letterSpacing: '1.2px',

  color: 'white',
  backgroundColor: 'blue',
  borderRadius: '10px',
  margin: '5px 5px 5px 5px'
}

const ServiceCard = ({ selectedService }) => (
  <ul className='d-flex justify-content-center' >
    {menu.filter(service => service.catagory === selectedService).map(service => (
      <li className='display-5 p-3' style={liStyle}>
        <p>
          {`${service.name.replace('-', ' ')}`}
        </p>
        <p>
          {`${service.price}`}
        </p>

      </li>
    ))}
  </ul>
);




export default ServiceCard;
