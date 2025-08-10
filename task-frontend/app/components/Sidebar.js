import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
export default function Sidebar() {
  return (
    <div className="p-2">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
          TaskHive
        </h2>
        <ul className="list-none flex flex-col gap-3">
          <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-speedometer2"></i>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-card-checklist"></i>
            <Link href="/task/all_tasks">Tasks</Link>
          </li>
          <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-plus-circle"></i>
            <Link href="/task/addTask">Add Task</Link>
          </li>
          {/* <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-check-circle"></i>
            <Link href="/task/completedTask">Completed Tasks</Link>
          </li>
          <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-clock-history"></i>
            <Link href="/task/pendingTask">Pending Tasks</Link>
          </li> */}
          <li className="text-lg bg-red-400 p-2 rounded-2xl text-white font-semibold hover:bg-white hover:text-red-400 transition-colors flex items-center gap-2">
            <i className="bi bi-gear"></i>
            <Link href="/task/settings">Setting</Link>
          </li>
        </ul>
      </div>
      {/* Bottom Section: User Profile */}
      <div className="mt-6 p-3 border-t border-gray-300">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <p className=" font-semibold">Ram Dixit</p>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
        <button className="mt-4 w-full text-sm font-medium bg-white text-red-500 py-2 px-4 rounded-xl hover:bg-red-300 hover:text-white transition-colors">
          <i className="bi bi-box-arrow-right mr-2"></i>Logout
        </button>
      </div>
    </div>
  );
}
