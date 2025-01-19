import React, {useState } from 'react';

function Contact() {
  //create a hook for data gathered from the form
  //initialize data to be empty
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  //form handler function
  const handleSubmit (e) => {

  }

  return (
    <section>
        <h1>Contact</h1>
    <div>
      <form onSubmit={handleSubmit}>
           <label>Name: <input type="text" name="name"></input></label>
           <label>Email: <input type="text" name="email"></input></label>
           <label>Message: <input type="text" name="messagel"></input></label>
       </form>
    </div>
    </section>

  )
}

export default Contact
