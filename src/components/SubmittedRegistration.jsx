import react from "react";
function SubmittedRegistration() {

  const data = JSON.parse(localStorage.getItem("registration"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow">

        <h2 className="text-2xl font-bold mb-4">
          You Already Registered
        </h2>

        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Ticket:</strong> {data.ticket}</p>

      </div>

    </div>
  );
}

export default SubmittedRegistration;