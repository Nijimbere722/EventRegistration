import react from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReviewRegistration() {

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const confirmRegistration = () => {
    localStorage.setItem("registration", JSON.stringify(data));
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow max-w-lg">

        <h2 className="text-2xl font-bold mb-4">
          Review Your Registration
        </h2>

        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Ticket:</strong> {data.ticket}</p>

        <div className="flex justify-between mt-6">

          <button
            onClick={() => navigate("/register")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={confirmRegistration}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
}

export default ReviewRegistration;