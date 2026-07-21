function ProfileActivity() {

  const activities = [
    "Startup application submitted",
    "Consultation booked",
    "Profile updated"
  ];


  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-5 text-gray-800">
        Recent Activity
      </h2>


      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-center gap-3 text-gray-600"
          >

            <span className="text-green-500">
              ✓
            </span>

            <p>
              {activity}
            </p>

          </div>

        ))}

      </div>


    </div>
  );
}

export default ProfileActivity;