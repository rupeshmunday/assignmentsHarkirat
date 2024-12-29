import React, { useState } from 'react';
import AdopterData from './AdopterData';
import { validation } from '../utils/validation';

const PetAdoptionForm = () => {
  const [showTable, setShowTable] = useState(false)
  const [formData, setFormData] = useState([]);
  const [values,setValues] = useState({
    'petName':'',
    'petType':'Dog',
    'breed':'',
    'adopterName':'',
    'email':'',
    'phone':''
  })

  const [errors,setErrors] = useState({
    'petName':'',
    'breed':'',
    'adopterName':'',
    'email':'',
    'phone':''
  })

  function setChangedValue (event){
    const {name,value} = event.target;
    setValues(prevValues => ({...prevValues,[name]:value}));
    const errorR = validation(name, value, {...errors});
    setErrors(errorR);
  }
  function goBack(){
    return setShowTable(!showTable);
  }

  function submitFunction(){
    console.log(
      `Pet Name: ${values.petName} 
      Pet Type: ${values.petType} 
      Breed: ${values.breed} 
      Adopter Name: ${values.adopterName} 
      Email: ${values.email} 
      Phone: ${values.phone}`
    );
    if (!petName
        || !breed || !adopterName
        || !email || !phone) {
        alert("Please fill out all fields");
        return;
    }
    /* The line `const hasErrors = Object.values(errors).some((val) => val);` is checking if there are any
    errors present in the `errors` object. */
    const hasErrors = Object.values(errors).some((val) => val);
    if (hasErrors) {
        alert("Please fill out all fields");
        return;
    }
    setFormData(prevData => [...prevData,values])
    setValues({
      'petName':'',
      'petType':'Dog',
      'breed':'',
      'adopterName':'',
      'email':'',
      'phone':''
    })
    setErrors({
      'petName':'',
      'breed':'',
      'adopterName':'',
      'email':'',
      'phone':''
    })
    setShowTable(showTable => !showTable)
  }
  if(!showTable){
    return (
      <div className='form'>
        <form action="post">
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            id='petName'
            name='petName'
            value={values.petName}
            onChange={setChangedValue}/>
            <small>{errors.petName}</small>
          <label htmlFor="petType">Pet Type</label>
          <select
            type="text"
            id='petType'
            name='petType'
            value={values.petType}
            onChange={setChangedValue}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Bird">Bird</option>
            </select>
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            id='breed'
            name='breed'
            value={values.breed}
            onChange={setChangedValue}/>
          <small>{errors.breed}</small>
          <label htmlFor="adopterName">Your Name</label>
          <input
            type="text"
            id='adopterName'
            name='adopterName'
            value={values.adopterName}
            onChange={setChangedValue}/>
          <small>{errors.adopterName}</small>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id='email'
            name='email'
            value={values.email}
            onChange={setChangedValue}/>
          <small>{errors.email}</small>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id='phone'
            name='phone'
            value={values.phone}
            onChange={setChangedValue}/>
          <small>{errors.phone}</small>
          <button
            type='submit'
            onClick={submitFunction}>Submit</button>
        </form>
      </div>
    )
  }
  return <AdopterData data={formData} back={goBack}></AdopterData>
}

export default PetAdoptionForm