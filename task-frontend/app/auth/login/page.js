'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    alert("Login submitted (check console for values)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md transition-all duration-300">
        
        {/* Logo or header (optional) */}
        <div className="text-center mb-8">
          <div className="text-4xl font-extrabold text-red-500 mb-2">📝 TaskFlow</div>
          <p className="text-sm text-gray-600">Welcome back! Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-red-500"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-sm hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-red-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
