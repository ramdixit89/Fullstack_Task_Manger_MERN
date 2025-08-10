'use client';
import Layout from "@/app/components/Layout";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleThemeToggle = () => setDarkMode(!darkMode);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  const handleLogout = () => {
    console.log("Logging out...");
    // Clear auth tokens or user state here
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Settings</h1>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Dark Mode</span>
          <button
            onClick={handleThemeToggle}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition duration-300 ${
              darkMode ? 'bg-red-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                darkMode ? 'translate-x-7' : ''
              }`}
            />
          </button>
        </div>

        {/* Notification Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsToggle}
            className="w-5 h-5 text-red-500 focus:ring-red-500"
          />
        </div>

        {/* Profile Settings Placeholder */}
        <div className="border-t pt-4">
          <h2 className="font-semibold text-lg mb-2">Profile</h2>
          <p className="text-sm text-gray-600">Manage your account information.</p>
          <button className="mt-2 text-sm text-red-500 hover:underline">Edit Profile</button>
        </div>

        {/* Logout Button */}
        <div className="border-t pt-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}
