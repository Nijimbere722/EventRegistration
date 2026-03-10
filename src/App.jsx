import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import EventInfo from "./components/EventInfo"
import RegistrationForm from "./components/RegistrationForm"
import ReviewRegistration from "./components/ReviewRegistration"
import Confirmation from "./components/Confirmation"
import SubmittedRegistration from "./components/SubmittedRegistration"

function App() {

  const [registrationData, setRegistrationData] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem("registration")
    if (saved) {
      setRegistrationData(JSON.parse(saved))
    }
  }, [])

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            registrationData
              ? <Navigate to="/submitted" />
              : <EventInfo />
          }
        />

        <Route
          path="/register"
          element={<RegistrationForm setRegistrationData={setRegistrationData} />}
        />

        <Route
          path="/review"
          element={
            <ReviewRegistration
              registrationData={registrationData}
              setRegistrationData={setRegistrationData}
            />
          }
        />

        <Route
          path="/confirmation"
          element={<Confirmation />}
        />

        <Route
          path="/submitted"
          element={
            <SubmittedRegistration
              registrationData={registrationData}
              setRegistrationData={setRegistrationData}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App