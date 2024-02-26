// SettingsPage.jsx
import React from "react";
import AccountSettings from "../components/settingsComponents/AccountSettings/AccountSettings";
import NotificationSettings from "../components/settingsComponents/NotificationSettings/NotificationSettings";
import LanguageSettings from "../components/settingsComponents/LanguageSettings/LanguageSettings";

const SettingsPage = () => {
return (
    <div>
        <h2>Settings</h2>
        <AccountSettings />
        <NotificationSettings />
        <LanguageSettings />
    </div>
  );
};

export default SettingsPage;
