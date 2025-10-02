import React, { useState } from 'react';

const tasks = [
  { id: 1, type: 'WhatsApp', name: 'Share promo', description: 'Share our promo on WhatsApp', reward: 10 },
  { id: 2, type: 'SMS', name: 'Send SMS', description: 'Send SMS to 5 friends', reward: 5 },
];

export default function Tasks() {
  const [tab, setTab] = useState('WhatsApp');
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setTab('WhatsApp')} className={`px-4 py-2 rounded ${tab === 'WhatsApp' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>WhatsApp Tasks</button>
        <button onClick={() => setTab('SMS')} className={`px-4 py-2 rounded ${tab === 'SMS' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>SMS Tasks</button>
      </div>
      <ul className="space-y-4">
        {tasks.filter(t => t.type === tab).map(task => (
          <li key={task.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold">{task.name}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-green-600">+₹{task.reward}</span>
              <button className="px-4 py-2 bg-yellow-400 text-white rounded">Mark as Done</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-gray-200 rounded">Load More</button>
      </div>
    </div>
  );
}
