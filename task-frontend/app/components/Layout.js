'use client';
import { useState } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="md:flex gap-3 p-2 h-screen w-screen relative overflow-hidden">
      {/* Toggle Button for Mobile */}
      <div className="md:hidden flex justify-between items-center bg-white p-4 rounded-2xl shadow mb-2 z-50">
        <h2 className="text-xl font-bold text-red-500">TaskHive</h2>
        <button onClick={() => setShowSidebar(!showSidebar)} className="text-red-500 text-2xl">
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar with slide-in/out transition */}
      <div
        className={`
          fixed top-0 left-0 h-full w-3/4 bg-white rounded-r-2xl p-4 z-40 transition-transform duration-300 ease-in-out
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block md:w-1/4
        `}
      >
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex w-full flex-col h-full">
        <div className="">
          <Header />
        </div>
        <main className="flex-1 overflow-auto bg-white rounded-2xl p-4">{children}</main>
      </div>

      {/* Optional: Dark background overlay when sidebar is open on mobile */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
}
