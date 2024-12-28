
// Sir Ali Jawwad code method
// const page= async (props: any) => {
//     const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
//     const data = await url.json()
//     console.log(data)

//     return(
//         <div className="container">
//             {props.params.id}
//         </div>
//     )
// }

// export default page;


type tParams = Promise<{ id: number }>;

const page = async ({ params }: { params: tParams }) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${(await params).id}`)
    const data = await url.json()
    console.log(data)
    return (
        <div className="p-6 bg-[#ffcdcd] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Post Details:</h2>
        <p className="text-lg text-gray-700">
          <span className="font-medium text-gray-800 font-serif leading-5 text-xl">ID:</span> {data.id}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-medium text-gray-800 text-xl">Body:</span> {data.body}
        </p>
      </div>
    </div>
    )
}

export default page;