import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import EventInfo from "./components/EventInfo";
import RegistrationForm from "./components/RegistrationForm";
import ReviewRegistration from "./components/ReviewRegistration";
import Confirmation from "./components/Confirmation";
import SubmittedRegistration from "./components/SubmittedRegistration";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="bg-slate-900 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <h1 className="text-xl font-bold">Tech Innovation Conference</h1>

          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>

            <Link to="/register" className="hover:text-blue-300 transition">
              Register
            </Link>

            <Link to="/submitted" className="hover:text-blue-300 transition">
              My Registration
            </Link>
          </div>

        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-screen bg-slate-950 p-8">

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">

          <Routes>

            <Route path="/" element={<EventInfo />} />

            <Route path="/register" element={<RegistrationForm />} />

            <Route path="/review" element={<ReviewRegistration />} />

            <Route path="/confirmation" element={<Confirmation />} />

            <Route path="/submitted" element={<SubmittedRegistration />} />

          </Routes>

        </div>

      </main>

    </BrowserRouter>
  );
}

export default App;