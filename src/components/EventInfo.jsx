import React from "react"
import { useNavigate } from "react-router-dom"

function EventInfo() {

  const navigate = useNavigate()

  return (
    <div>

      <h1>Tech Innovation Conference 2026</h1>

      <p>Date: March 25-26, 2026</p>
      <p>Location: Kigali Convention Center</p>

      <p>
        Join developers, designers, entrepreneurs and tech enthusiasts
        to explore the latest innovations in technology.
      </p>

      <h3>Key Topics</h3>

      <ul>
        <li>Artificial Intelligence</li>
        <li>Blockchain</li>
        <li>Startup Innovation</li>
      </ul>

      <button onClick={() => navigate("/register")}>
        Register Now
      </button>

    </div>
  )
}

export default EventInfo