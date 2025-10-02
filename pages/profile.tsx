import React from 'react';import React from 'react';



export default function Profile() {export default function Profile() {

  return (  return (

    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">    <div className="min-h-screen bg-gray-50 p-6">

      <div className="w-full max-w-lg bg-white p-6 rounded shadow">      <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <h2 className="text-xl font-bold mb-4">Profile</h2>      <form className="bg-white p-6 rounded shadow max-w-lg mx-auto flex flex-col gap-4">

        <form className="flex flex-col gap-4">        <div>

          <input type="text" placeholder="Name" className="border p-2 rounded" />          <label className="block font-semibold mb-1">Name</label>

          <input type="text" placeholder="Email" className="border p-2 rounded" />          <input type="text" className="w-full p-2 border rounded" defaultValue="" />

          <input type="text" placeholder="Username" className="border p-2 rounded" />        </div>

          <div className="border-t pt-4">        <div>

            <h3 className="font-semibold mb-2">Bank Account</h3>          <label className="block font-semibold mb-1">Email</label>

            <input type="text" placeholder="Account Number" className="border p-2 rounded mb-2" />          <input type="email" className="w-full p-2 border rounded" defaultValue="" />

            <input type="text" placeholder="IFSC Code" className="border p-2 rounded" />        </div>

          </div>        <div>

          <div className="border-t pt-4">          <label className="block font-semibold mb-1">Username</label>

            <h3 className="font-semibold mb-2">Invite Code</h3>          <input type="text" className="w-full p-2 border rounded" defaultValue="" />

            <div className="flex gap-2 items-center">        </div>

              <input type="text" value="RUPEE123" readOnly className="border p-2 rounded flex-1" />        <div className="mt-4">

              <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded">Copy</button>          <h2 className="font-semibold mb-2">Bank Account</h2>

            </div>          <input type="text" placeholder="Account Number" className="w-full p-2 border rounded mb-2" />

          </div>          <input type="text" placeholder="IFSC Code" className="w-full p-2 border rounded" />

          <div className="flex gap-2 mt-4">        </div>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>        <div className="mt-4">

            <button type="button" className="bg-gray-300 px-4 py-2 rounded">Cancel</button>          <h2 className="font-semibold mb-2">Invite Code</h2>

          </div>          <div className="flex gap-2 items-center">

        </form>            <input type="text" value="INVITE123" readOnly className="p-2 border rounded flex-1" />

      </div>            <button className="px-3 py-1 bg-blue-600 text-white rounded">Copy</button>

    </div>            <button className="px-3 py-1 bg-green-600 text-white rounded">Share</button>

  );          </div>

}        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded">Save</button>
          <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
