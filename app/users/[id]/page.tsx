import React from 'react'

type tParams = Promise<{ id: number }>;
const page = async ({params}: {params: tParams}) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${(await params).id}`)
    const data = await url.json()
    console.log(data)
  return (
    <div className="p-6 bg-[#ffcdcd] min-h-screen flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Details</h2>
      <p className="text-lg text-gray-700">
        <span className="font-medium text-gray-800 font-serif leading-5 text-xl">ID:</span> {data.id}
      </p>
      <p className="text-lg text-gray-700">
        <span className="font-medium text-gray-800 text-xl">User Name:</span> {data.username}
      </p>
    </div>
  </div>   
  )
}

export default page
