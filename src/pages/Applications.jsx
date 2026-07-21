import ApplicationList from "../components/Applications/ApplicationList";

function Applications() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800">
          My Applications
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Track your startup applications and their status.
        </p>

        <ApplicationList />

      </div>

    </div>
  );
}

export default Applications;