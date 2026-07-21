function ProfileForm() {

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Profile Information
      </h2>


      <div className="grid md:grid-cols-2 gap-5">


        <div>
          <label className="text-sm text-gray-600">
            Full Name
          </label>

          <input
            type="text"
            value="Syed Sarin Mehdi"
            readOnly
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


        <div>
          <label className="text-sm text-gray-600">
            Email
          </label>

          <input
            type="email"
            value="example@gmail.com"
            readOnly
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


        <div>
          <label className="text-sm text-gray-600">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


        <div>
          <label className="text-sm text-gray-600">
            Startup Name
          </label>

          <input
            type="text"
            placeholder="Your startup name"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


        <div>
          <label className="text-sm text-gray-600">
            Industry
          </label>

          <input
            type="text"
            placeholder="Technology"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


        <div>
          <label className="text-sm text-gray-600">
            City
          </label>

          <input
            type="text"
            placeholder="Your city"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>


      </div>


      <div className="mt-5">

        <label className="text-sm text-gray-600">
          Bio
        </label>

        <textarea
          placeholder="Tell something about yourself"
          rows="4"
          className="w-full mt-2 p-3 border rounded-lg"
        />

      </div>


      <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
        Update Profile
      </button>


    </div>
  );
}

export default ProfileForm;