import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import DisplayServices from './DisplayServices';

const divStyle = {
  backgroundColor: '#FFCBC9'
}

const Services = () => {
  const [selectedService, setSelectedService] = useState('');


  function handleChange(e) {
    setSelectedService(e.target.value)
  }

  return(
    <div className="container">
      <div className="overflow-auto" style={{minHeight: '70vh', maxHeight: '70vh'}}>
        <DisplayServices selectedService={selectedService}/>
      </div>
      <div>
        <Form onChange={handleChange}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select a Service</Form.Label>
            <Form.Control as="select" custom>
              <option value="" selected disabled>Select a service...</option>
              <option value="manicure">Manicure</option>
              <option value="pedicure">Pedicure</option>
              <option value="waxing">Waxing</option>
              <option value="acrylic">Acrylic</option>
              <option value="lash">Lashes</option>
              <option value="facial">Facials</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Services;
