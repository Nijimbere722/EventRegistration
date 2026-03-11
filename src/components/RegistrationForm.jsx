import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    navigate("/review", {
      state: formData
    });
  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Event Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>


        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>


        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>


        {/* Organization */}
        <div>
          <label className="block mb-1 font-medium">
            Organization / Institution
          </label>

          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>


        {/* Ticket Type */}
        <div>
          <label className="block mb-1 font-medium">
            Ticket Type
          </label>

          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="Standard">Standard</option>
            <option value="VIP">VIP</option>
            <option value="Student">Student</option>
          </select>
        </div>


        {/* Dietary */}
        <div>
          <label className="block mb-1 font-medium">
            Dietary Requirements
          </label>

          <input
            type="text"
            name="dietary"
            value={formData.dietary}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>


        {/* Notes */}
        <div>
          <label className="block mb-1 font-medium">
            Additional Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>


        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Continue to Review
        </button>

      </form>

    </div>
  );
}