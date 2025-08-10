'use client';
import Layout from "@/app/components/Layout";
import { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !status) {
      setIsSuccess(false);
      setMessage('Please fill in all fields.');
    } else {
      const task = { title, description, status };
      console.log("New Task:", task);
      setIsSuccess(true);
      setMessage('Task added successfully!');
      // reset fields
      setTitle('');
      setDescription('');
      setStatus('pending');
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4 text-red-500">Add Task</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-medium mb-1">Title</label>
              <input
                type="text"
                id="title"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-medium mb-1">Description</label>
              <textarea
                id="description"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="status" className="font-medium mb-1">Status</label>
              <select
                id="status"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Message Section */}
        <div className="w-full md:w-1/2">
          {message && (
            <div
              className={`p-4 rounded-lg shadow-md mt-4 md:mt-0 ${
                isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
