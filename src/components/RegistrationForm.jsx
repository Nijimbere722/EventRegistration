import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "Standard",
    diet: "",
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-full max-w-lg"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Conference Registration
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <input
          name="organization"
          placeholder="Organization"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <select
          name="ticket"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <textarea
          name="notes"
          placeholder="Additional notes"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Review Registration
        </button>

      </form>

    </div>
  );
}

export default RegistrationForm;