'use client';
import { useState, useEffect } from "react";
import Layout from "@/app/components/Layout";
import { BsGrid, BsList, BsTrash, BsCheck2Circle } from "react-icons/bs";

export default function AllTasksPage() {
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;

  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", status: "pending" },
    { id: 2, title: "Complete project", status: "completed" },
    { id: 3, title: "Read a book", status: "pending" },
    { id: 4, title: "Workout", status: "completed" },
    { id: 5, title: "Code daily", status: "pending" },
    { id: 6, title: "Team meeting", status: "completed" },
  ]);

  // Filter tasks
  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  // Paginated tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  // Reset to page 1 on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const markCompleted = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            className={`p-2 rounded-lg border ${
              view === "list"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setView("list")}
          >
            <BsList className="text-xl" />
          </button>
          <button
            className={`p-2 rounded-lg border ${
              view === "grid"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setView("grid")}
          >
            <BsGrid className="text-xl" />
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-4 flex gap-3 flex-wrap">
        {["all", "completed", "pending"].map((status) => (
          <button
            key={status}
            className={`capitalize px-4 py-2 rounded-full font-medium border ${
              filter === status
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="mb-4 text-sm text-gray-500">
        Showing {currentTasks.length} of {filteredTasks.length} tasks
      </div>

      {/* Task Views */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-400 italic text-center mt-10">
          No tasks found.
        </p>
      ) : view === "list" ? (
        <div className="space-y-3">
          {currentTasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm"
            >
              <div>
                <p className="text-lg font-medium">{task.title}</p>
                <span
                  className={`inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full ${
                    task.status === "completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
              </div>
              <div className="flex gap-2">
                {task.status !== "completed" && (
                  <button
                    title="Mark as Done"
                    onClick={() => markCompleted(task.id)}
                    className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600"
                  >
                    <BsCheck2Circle />
                  </button>
                )}
                <button
                  title="Delete"
                  onClick={() => deleteTask(task.id)}
                  className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  <BsTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-100 p-4 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <p className="text-lg font-semibold mb-2">{task.title}</p>
              <div className="flex justify-between items-center mt-auto">
                <span
                  className={`w-max px-3 py-1 text-sm font-semibold rounded-full ${
                    task.status === "completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
                <div className="flex gap-2">
                  {task.status !== "completed" && (
                    <button
                      title="Mark as Done"
                      onClick={() => markCompleted(task.id)}
                      className="p-1.5 rounded-full bg-green-500 text-white hover:bg-green-600"
                    >
                      <BsCheck2Circle />
                    </button>
                  )}
                  <button
                    title="Delete"
                    onClick={() => deleteTask(task.id)}
                    className="p-1.5 rounded-full bg-red-500 text-white hover:bg-red-600"
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredTasks.length > tasksPerPage && (
        <div className="mt-6 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-red-500 text-white disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-red-500 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </Layout>
  );
}
