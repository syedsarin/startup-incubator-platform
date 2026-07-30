import "./Settings.css";
import {
  User,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
} from "lucide-react";

function Settings() {
  return (
    <section className="settings-page">

      <div className="settings-header">

        <h2>Settings</h2>

        <p>
          Manage your account settings and preferences.
        </p>

      </div>

      <div className="settings-list">

        <div className="settings-card">

          <div className="settings-left">

            <User size={22} />

            <div>

              <h3>Account Settings</h3>

              <p>
                Update your personal information.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

        <div className="settings-card">

          <div className="settings-left">

            <Bell size={22} />

            <div>

              <h3>Notification Preferences</h3>

              <p>
                Manage notification settings.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

        <div className="settings-card">

          <div className="settings-left">

            <Lock size={22} />

            <div>

              <h3>Change Password</h3>

              <p>
                Update your account password.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

        <div className="settings-card logout">

          <div className="settings-left">

            <LogOut size={22} />

            <div>

              <h3>Logout</h3>

              <p>
                Sign out of your account.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

      </div>

    </section>
  );
}

export default Settings;