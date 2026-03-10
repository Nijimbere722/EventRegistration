import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function RegistrationForm({ setRegistrationData }) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "Standard",
    diet: "",
    notes: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    setRegistrationData(formData)
    navigate("/review")
  }

  return (

    <div>

      <h2>Event Registration</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input name="organization" placeholder="Organization" onChange={handleChange} />

      <select name="ticket" onChange={handleChange}>
        <option>Standard</option>
        <option>VIP</option>
        <option>Student</option>
      </select>

      <input name="diet" placeholder="Dietary Requirements" onChange={handleChange} />

      <textarea name="notes" placeholder="Additional Notes" onChange={handleChange} />

      <button onClick={handleNext}>Next</button>

    </div>
  )
}

export default RegistrationForm