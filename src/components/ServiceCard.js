import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = require('./data/data')

const ServiceCard = ({ service }) => (
  <ul>
  {data.filter(obj => obj.catagory === service).map(filteredItem => (
    <li class='display-4' style={{padding: '5px'}}>
      {`${filteredItem.name} ${filteredItem.price}`}
    </li>
  ))}
  </ul>
);




export default ServiceCard;
