import React from 'react';

const menu = require('./data/data');

const divStyle = {
  color: 'black',
  backgroundColor: '#FEE2D5',

  fontFamily: 'prior-sans, sans-serif',
  fontWeight: '700',
  fontStyle: 'normal',

  minWidth: '150px',
  maxWidth: '150px',
  minHeight: '250px',
  maxHeight: '250px',
  padding: '15px',
  margin: '8px',

  borderRadius: '7px'
}

const DisplayService = ({ selectedService }) => {
  const filteredSelection = (
    menu.filter(service => service.catagory === selectedService)
  )

  const displayNames = (
    filteredSelection.map(service =>
      <div className='container' style={divStyle}>
        <div className='row'>
          <p className='p-2 h2'>{service.name.replace('-', ' ')}</p>
        </div>
        <div className='row row-cols-2'>
          <div className='col'>
            <p className='h6'>
              Price...
            </p>
          </div>
          <div className='col'>
            <p className='d-flex justify-content-end h6'>
              {`$${service.price}`}
            </p>
          </div>
        </div>
      </div>
    )
  )

  return(
    <div className='d-flex'>
      {displayNames}
    </div>
  )
}

export default DisplayService;
