import "./InvestorSettings.css";
import {
  User,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
} from "lucide-react";

function InvestorSettings() {
  return (
    <section className="investor-settings-page">

      <div className="investor-settings-header">

        <h2>Settings</h2>

        <p>
          Manage your investor account and preferences.
        </p>

      </div>

      <div className="investor-settings-list">

        <div className="investor-settings-card">

          <div className="settings-left">

            <User size={22} />

            <div>

              <h3>Account Settings</h3>

              <p>
                Update your profile information.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

        <div className="investor-settings-card">

          <div className="settings-left">

            <Bell size={22} />

            <div>

              <h3>Notification Preferences</h3>

              <p>
                Manage your notification settings.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

        <div className="investor-settings-card">

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

        <div className="investor-settings-card logout">

          <div className="settings-left">

            <LogOut size={22} />

            <div>

              <h3>Logout</h3>

              <p>
                Sign out from your investor account.
              </p>

            </div>

          </div>

          <ChevronRight size={20} />

        </div>

      </div>

    </section>
  );
}

export default InvestorSettings;