'use client';
import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", status: "pending" },
    { id: 2, title: "Complete project", status: "completed" },
    { id: 3, title: "Send email to client", status: "pending" },
    { id: 4, title: "Pay electricity bill", status: "completed" },
  ]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const pendingTasks = totalTasks - completedTasks;

  const [today, setToday] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    setToday(date);
  }, []);

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-red-500">Welcome back!</h1>
            <p className="text-gray-600">{today}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaTasks className="mx-auto text-3xl text-indigo-500 mb-2" />
            <h2 className="text-lg font-semibold text-gray-700">Total Tasks</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">{totalTasks}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaCheckCircle className="mx-auto text-3xl text-green-500 mb-2" />
            <h2 className="text-lg font-semibold text-gray-700">Completed</h2>
            <p className="text-3xl font-bold text-green-500 mt-2">{completedTasks}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaClock className="mx-auto text-3xl text-yellow-500 mb-2" />
            <h2 className="text-lg font-semibold text-gray-700">Pending</h2>
            <p className="text-3xl font-bold text-yellow-500 mt-2">{pendingTasks}</p>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Tasks</h3>
          <ul className="space-y-3">
            {tasks.slice(0, 5).map(task => (
              <li
                key={task.id}
                className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition duration-200"
              >
                <span className="text-gray-700 font-medium">{task.title}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
