import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, [User Name]</h1>
      </header>
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Total Earnings</h2>
          <p className="text-2xl text-green-600 font-bold">₹0.00</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Available for Withdrawal</h2>
          <p className="text-2xl text-blue-600 font-bold">₹0.00</p>
        </div>
      </section>
      <nav className="flex gap-4 mb-6">
        <a href="/tasks" className="px-4 py-2 bg-blue-500 text-white rounded">Tasks</a>
        <a href="/profile" className="px-4 py-2 bg-gray-200 rounded">Profile</a>
        <a href="/withdraw" className="px-4 py-2 bg-green-500 text-white rounded">Withdraw</a>
        <a href="/invite" className="px-4 py-2 bg-yellow-400 text-white rounded">Invite</a>
        <a href="/settings" className="px-4 py-2 bg-gray-200 rounded">Settings</a>
      </nav>
      <section className="mb-6 flex gap-4">
        <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded font-bold">Start WhatsApp Task</button>
        <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded font-bold">Start SMS Task</button>
      </section>
      <section>
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <div className="bg-white p-4 rounded shadow">
          <p>No recent activity yet.</p>
        </div>
      </section>
    </div>
  );
}

