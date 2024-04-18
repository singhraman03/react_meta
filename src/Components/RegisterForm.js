import { useState } from "react";

function RegisterForm(){
  const[Form, setForm] = useState({
    firstName: 'John',
    lastName: 'Lucas',
    email: 'JohnLucas@gmail.com',
  });

  return(
    <>
    <label >
      FirstName:
      <input value={Form.firstName} onChange={e => {setForm({...Form, firstName: e.target.value})}}/>
    </label>
    <label>
      LastName:
      <input value={Form.lastName} onChange={e => {setForm({...Form, lastName: e.target.value})}}/>
    </label>
    <label>
      Email:
      <input value={Form.email} onChange={e => {setForm({...Form, email: e.target.value})}}/>
    </label>
    <p>
      {Form.firstName}{' '}
      {Form.lastName}{' '}
      ({Form.email})
    </p>
    </>
  )
};

export default RegisterForm