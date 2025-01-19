//Contact.jsx

import React, {useState } from 'react';

function Contact() {
  //create a hook for data gathered from the form
  //initialize data to be empty
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  //create a hook for handling errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    emailInvalid: false
  });

  const handleChange = (e) => {
    // Getting the value and name of the input which triggered the change
    //name is the name attribute of the HTML input field from the form, 
    //value is the current value of the input field
    const { name, value } = e.target;
      
    // If the email field is being updated, validate it
    if (name === 'email') {
      // Check if the email is valid on every change
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailInvalid: true
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailInvalid: false
        }));
      }
    }

    //update the current state value
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    // Check if the field is empty and mark as required error
    if (!formData[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  if (name === 'email' && formData[name] && !validateEmail(formData[name])) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailInvalid: true
    }));
  } else if (name === 'email') {
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailInvalid: false
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };


  //form handler function
  const handleSubmit = (e) => {
       //suppress default actions
       e.preventDefault();

       // Check if all fields are filled and valid before submitting
       let valid = true;
       let newErrors = { ...errors };

      // Check for empty fields
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = true;
        valid = false;
      }
    }

    // Check if email is valid
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.emailInvalid = true;
      valid = false;
    }

    setErrors(newErrors);


    // If all fields are valid, submit the form
    if (valid) {
       //Display successfule form submission
       console.log('Form submitted:', formData);
       //Clear the fields on the screen
       setFormData({
        name: '',
        email: '',
        message: ''
        });
    }
  };

   // Validate email format if it's the email field


  return (
    <section>
        <h1>Contact</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
         <label className="form-label">Name:</label>
         <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <small className="error">This field is required</small>}
        </div>
        <div>
         <label className="form-label">Email:</label>
         <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
                      {errors.email && <small className="error">This field is required</small>}
            {errors.emailInvalid && (
              <small className="error">Please enter a valid email address</small>
            )}
        </div>        
        <div>
         <label className="form-label">Message:</label>
         <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.message && <small className="error">This field is required</small>}
        </div> 
        <button type='submit'>
              Submit
        </button>  
      </form>
    </div>
    </section>

  );
}

export default Contact
