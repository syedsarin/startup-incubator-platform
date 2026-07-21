import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileForm from "../components/Profile/ProfileForm";
import ProfileActivity from "../components/Profile/ProfileActivity";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-5xl mx-auto space-y-8">

        <ProfileHeader />

        <ProfileForm />

        <ProfileActivity />

      </div>

    </div>
  );
}

export default Profile;