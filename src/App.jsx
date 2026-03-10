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
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Tech Conference</h1>

          <div className="space-x-4">
            <Link
              to="/"
              className="hover:text-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="/register"
              className="hover:text-gray-200 transition"
            >
              Register
            </Link>

            <Link
              to="/submitted"
              className="hover:text-gray-200 transition"
            >
              My Registration
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">

          <Routes>

            <Route path="/" element={<EventInfo />} />

            <Route
              path="/register"
              element={<RegistrationForm />}
            />

            <Route
              path="/review"
              element={<ReviewRegistration />}
            />

            <Route
              path="/confirmation"
              element={<Confirmation />}
            />

            <Route
              path="/submitted"
              element={<SubmittedRegistration />}
            />

          </Routes>

        </div>
      </main>

    </BrowserRouter>
  );
}

export default App;