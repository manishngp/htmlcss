import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedForms ,setSubmittedForms]=useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmittedForms([...submittedForms, formData]); // Append new form data to the array
    setFormData({ name: "", email: "" });
    console.log(submittedForms)
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>

      <table style={{  border:'1px solid', bordercollapse: 'collapse' , width: '100%'}}>
          <thead >
            <th  style={{border:"1px solid"}}>names</th>
          </thead>
      {submittedForms.map((e)=>(

<tbody >
<td style={{border:"1px solid"}}>{e.name}</td>
</tbody>
        
       
      ))}


        </table>
    </form>
  );
};

export default MyForm;
