import { useNavigate } from "react-router-dom";

export default function EventInfo() {

  const navigate = useNavigate();

  return (
    <div className="space-y-10">

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Tech Innovation Conference 2026
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join developers, designers, entrepreneurs, and tech enthusiasts
          for a day of innovation, networking, and learning about the
          latest trends shaping the future of technology.
        </p>
      </div>


      {/* Event Image */}
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
          alt="Tech Conference"
          className="rounded-xl shadow-md w-full max-w-3xl"
        />
      </div>


      {/* Event Details */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-100 p-5 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">📅 Date & Time</h2>
          <p>July 20, 2026</p>
          <p>09:00 AM – 05:00 PM</p>
        </div>

        <div className="bg-gray-100 p-5 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">📍 Venue</h2>
          <p>Kigali Convention Centre</p>
          <p>Kigali, Rwanda</p>
        </div>

      </div>


      {/* Speakers / Topics */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          Key Topics & Speakers
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Future of Web Development</li>
          <li>Startup Innovation & Entrepreneurship</li>
          <li>Cybersecurity in the Modern World</li>
        </ul>
      </div>


      {/* Register Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Register for the Conference
        </button>
      </div>

    </div>
  );
}