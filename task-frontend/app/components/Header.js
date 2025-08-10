import { BiUser } from "react-icons/bi"; // If using React Icons (optional)

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-xl mb-3">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Welcome, <span className="text-red-500">Ram</span></h1>
        <p className="text-sm text-gray-500">Have a productive day!</p>
      </div>
      <div className="flex items-center gap-3">
        {/* <BiUser className="text-3xl text-red-500" /> */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-red-300"
        />
      </div>
    </div>
  );
}
