import Account from "../../components/Account/Account";
import Notification from "../../components/Notification/Notification";
import Language from "../../components/Language/Language";

const SettingsPage = () => {
  return (
    <div>
      <h2>Settings</h2>
      <Account />
      <Notification />
      <Language />
    </div>
  );
};

export default SettingsPage;
