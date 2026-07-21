import ApplicationCard from "./ApplicationCard";

function ApplicationList() {

  const applications = [
    {
      name: "AI Health App",
      status: "Pending",
      date: "19 July 2026"
    },
    {
      name: "Food Delivery Platform",
      status: "Approved",
      date: "10 July 2026"
    },
    {
      name: "Travel Startup",
      status: "Rejected",
      date: "01 July 2026"
    }
  ];

  return (
    <div className="space-y-5">

      {applications.map((application, index) => (
        <ApplicationCard
          key={index}
          application={application}
        />
      ))}

    </div>
  );
}

export default ApplicationList;