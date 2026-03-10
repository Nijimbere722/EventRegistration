import react from " react";
import { useNavigate, useEffect } from "react-router-dom";

function EventInfo() {

  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("registration");

    if (saved) {
      navigate("/submitted");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4">
          Tech Innovation Conference
        </h1>

        <p className="mb-2">📅 July 20, 2026</p>
        <p className="mb-4">📍 Kigali Convention Center</p>

        <p className="text-gray-600 mb-6">
          Join developers, designers and tech enthusiasts for a day of innovation and learning.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default EventInfo;