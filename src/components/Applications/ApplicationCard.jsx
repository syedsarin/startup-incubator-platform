function ApplicationCard({ application }) {

  const statusStyle = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700"
  };


  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {application.name}
        </h2>

        <p className="text-gray-500 mt-2">
          Submitted: {application.date}
        </p>
      </div>


      <div className="text-right">

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${statusStyle[application.status]}`}
        >
          {application.status}
        </span>


        <button className="block mt-4 text-indigo-600 hover:underline">
          View Details
        </button>

      </div>

    </div>
  );
}

export default ApplicationCard;