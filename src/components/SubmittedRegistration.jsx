import React from "react"
import { useNavigate } from "react-router-dom"

function SubmittedRegistration({ registrationData, setRegistrationData }) {

  const navigate = useNavigate()

  const cancelRegistration = () => {
    localStorage.removeItem("registration")
    setRegistrationData(null)
    navigate("/")
  }

  if (!registrationData) {
    return <p>No registration found</p>
  }

  return (

    <div>

      <h2>You Already Registered</h2>

      <p>Name: {registrationData.name}</p>
      <p>Email: {registrationData.email}</p>
      <p>Ticket: {registrationData.ticket}</p>

      <button onClick={() => navigate("/register")}>
        Edit Registration
      </button>

      <button onClick={cancelRegistration}>
        Cancel Registration
      </button>

    </div>

  )
}

export default SubmittedRegistration