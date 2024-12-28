import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default async function Home() {
  const apiEndpoints = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/photos"
  ]

  const fetchData = async (endpoint: string) => {
    const response = await fetch(endpoint);
    return await response.json();
  };

  const [todos, posts, users, comments, albums, photos] = await Promise.all(apiEndpoints.map(fetchData));

  return (
   <>
    <div className="p-6 bg-[#ffcdcd] min-h-screen">
  <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">Dynamic Api Fetching</h1>

  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Todos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {todos.slice(0, 6).map((todo: any) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-blue-50 transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Todo {todo.id}</h3>
        <FaArrowRightLong className="text-2xl text-gray-600" />
          </div>
          </div>
        </Link>
      ))}
    </div>
  </section>

  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.slice(0, 6).map((post: any) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-green-50 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Post {post.id}</h3>
           <FaArrowRightLong className="text-2xl text-gray-600" />
           </div>
          </div>
        </Link>
      ))}
    </div>
  </section>

  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Users</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.slice(0, 6).map((user: any) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-purple-50 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">User {user.id}</h3>
            <FaArrowRightLong className="text-2xl text-gray-600" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>

  <section className="mb-10">
  <h2 className="text-3xl font-bold mb-6 text-gray-700">Comments</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {comments.slice(0, 6).map((comment: any) => (
        <Link key={comment.id} href={`/comments/${comment.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-purple-50 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">User {comment.id}</h3>
            <FaArrowRightLong className="text-2xl text-gray-600" />
            </div>
          </div>
          </Link>
          ))}
          </div>
  </section>
  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">
      Albums
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.slice(0, 6).map((album: any) => (
        <Link key={album.id} href={`/albums/${album.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-purple-50 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Album {album.id}</h3>
            <FaArrowRightLong className="text-2xl text-gray-600" />
            </div>
          </div>
        </Link>
      ))}
      </div>
      </section>
      <section>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Photos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.slice(0, 6).map((photo: any) => (
        <Link key={photo.id} href={`/photos/${photo.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-purple-50 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Photo {photo.id}</h3>
            <FaArrowRightLong className="text-2xl text-gray-600" />
            </div>
          </div>
        </Link>
      ))}
      </div>
      </section>
</div>
   </>
  );
}
