import { useLocation, useNavigate } from "react-router-dom";

export default function ReviewRegistration() {

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">No data found</h2>
        <p>Please complete the registration form first.</p>
      </div>
    );
  }

  const handleConfirm = () => {
    localStorage.setItem("registrationData", JSON.stringify(data));
    navigate("/confirmation");
  };
  
  const handleCancel = () => {
  localStorage.removeItem("registrationData");
  navigate("/");
};

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Review Your Registration
      </h2>

      <div className="space-y-3">

        <p><strong>Full Name:</strong> {data.fullName}</p>

        <p><strong>Email:</strong> {data.email}</p>

        <p><strong>Phone:</strong> {data.phone}</p>

        <p><strong>Organization:</strong> {data.organization}</p>

        <p><strong>Ticket Type:</strong> {data.ticketType}</p>

        <p><strong>Dietary Requirements:</strong> {data.dietary}</p>

        <p><strong>Additional Notes:</strong> {data.notes}</p>

      </div>

      <div className="mt-6 flex gap-4">

        <button
          onClick={() => navigate("/register")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Confirm Registration
        </button>

      </div>

    </div>
  );
}