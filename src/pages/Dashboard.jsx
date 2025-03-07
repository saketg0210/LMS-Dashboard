// src/pages/Dashboard.jsx
import { useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalTeachers: 25,
    totalClasses: 10,
    totalResources: 100,
    upcomingEvents: [
      { id: 1, title: "Math Class", date: "2025-02-21", time: "10:00 AM" },
      { id: 2, title: "Staff Meeting", date: "2025-02-22", time: "3:00 PM" },
    ],
  });

  const [performance, setPerformance] = useState({
    avgRating: 4.5,
    totalFeedback: 50,
    attendance: "92%",
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🏫 Headmaster Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h2 className="text-xl font-bold">👩‍🏫 Total Teachers</h2>
          <p className="text-2xl">{stats.totalTeachers}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h2 className="text-xl font-bold">🏫 Total Classes</h2>
          <p className="text-2xl">{stats.totalClasses}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h2 className="text-xl font-bold">📚 Total Resources</h2>
          <p className="text-2xl">{stats.totalResources}</p>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">🗓️ Upcoming Schedule</h2>
        <ul>
          {stats.upcomingEvents.map((event) => (
            <li key={event.id} className="mb-2">
              <strong>{event.title}</strong> — {event.date} at {event.time}
            </li>
          ))}
        </ul>
      </div>

      {/* Performance Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">📊 Performance Overview</h2>
        <p>⭐ Average Rating: {performance.avgRating}</p>
        <p>💬 Total Feedback: {performance.totalFeedback}</p>
        <p>📈 Attendance: {performance.attendance}</p>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });

//   useEffect(() => {
//     fetch('data.json')
//       .then(response => response.json())
//       .then(data => setPosts(data.posts));
//   }, []);

//   const handleAddPost = () => {
//     const newPosts = [...posts, newPost];
//     setPosts(newPosts);
//     setNewPost({ title: '', body: '' });

//     // Update data.json file
//     fetch('data.json', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ posts: newPosts }),
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//       <form>
//         <input
//           type="text"
//           name="title"
//           value={newPost.title}
//           onChange={handleInputChange}
//           placeholder="Title"
//         />
//         <input
//           type="text"
//           name="body"
//           value={newPost.body}
//           onChange={handleInputChange}
//           placeholder="Body"
//         />
//         <button type="button" onClick={handleAddPost}>
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
