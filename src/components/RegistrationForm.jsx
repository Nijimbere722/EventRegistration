import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegistrationForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "Standard",
    dietary: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/review", { state: formData });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Event Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-gray-700 mb-1">
            Organization
          </label>
          <input
            type="text"
            name="organization"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Ticket Type */}
        <div>
          <label className="block text-gray-700 mb-1">
            Ticket Type
          </label>
          <select
            name="ticketType"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option>Standard</option>
            <option>VIP</option>
            <option>Student</option>
          </select>
        </div>

        {/* Dietary */}
        <div>
          <label className="block text-gray-700 mb-1">
            Dietary Requirements
          </label>
          <input
            type="text"
            name="dietary"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            name="notes"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Next
        </button>

      </form>
    </div>
  );
}