import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Rupeedesk</h1>
      <p className="mb-8">Your dashboard for earnings and tasks.</p>
      <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</a>
    </div>
  );
}
