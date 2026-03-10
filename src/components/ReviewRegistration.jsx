import React from "react"
import { useNavigate } from "react-router-dom"

function ReviewRegistration({ registrationData }) {

  const navigate = useNavigate()

  if (!registrationData) {
    return <p>No data</p>
  }

  const confirm = () => {
    localStorage.setItem("registration", JSON.stringify(registrationData))
    navigate("/confirmation")
  }

  return (

    <div>

      <h2>Review Your Registration</h2>

      <p>Name: {registrationData.name}</p>
      <p>Email: {registrationData.email}</p>
      <p>Phone: {registrationData.phone}</p>
      <p>Organization: {registrationData.organization}</p>
      <p>Ticket: {registrationData.ticket}</p>

      <button onClick={() => navigate("/register")}>Edit</button>

      <button onClick={confirm}>
        Confirm Registration
      </button>

    </div>
  )
}

export default ReviewRegistration