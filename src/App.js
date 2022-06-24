import React from "react";
// TODO: import useFormik from formik library
import { useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let successful = true;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      if (successful)  alert("Login Successful");
    },
    validate: values =>{
      let errors = {};      
      if(!regex.test(values.email)) { 
        errors.email = 'Username should be an email';
        successful = false;

      }
      if(!values.email) {
        errors.email = 'Field required';
        successful = false;
      }
      if(!values.password) {
        errors.password = 'Field required';
        successful = false;
      }
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>        
        <div>Username(E-mail):</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id="submitBtn" type="submit">Submit</button>
      </form>  
    </div>
  );
}

export default App;
