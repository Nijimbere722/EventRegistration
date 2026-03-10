import React from "react"; // no spaces
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EventInfo from "./components/EventInfo";
import RegistrationForm from "./components/RegistrationForm";
import ReviewRegistration from "./components/ReviewRegistration";
import Confirmation from "./components/Confirmation";
import SubmittedRegistration from "./components/SubmittedRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventInfo />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/review" element={<ReviewRegistration />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/submitted" element={<SubmittedRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;