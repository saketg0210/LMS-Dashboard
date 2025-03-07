import { useState } from "react";

export default function TeacherRatings() {
  const [ratings, setRatings] = useState([
    { id: 1, teacher: "Mr. Smith", subject: "Math", rating: 4, comment: "Very engaging lessons!" },
    { id: 2, teacher: "Ms. Johnson", subject: "English", rating: 5, comment: "Great class management." },
  ]);

  const [newRating, setNewRating] = useState({
    teacher: "",
    subject: "",
    rating: 1,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRating({ ...newRating, [name]: value });
  };

  const addRating = (e) => {
    e.preventDefault();
    const ratingToAdd = { id: ratings.length + 1, ...newRating };
    setRatings([...ratings, ratingToAdd]);
    setNewRating({ teacher: "", subject: "", rating: 1, comment: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">🌟 Teacher Ratings</h2>

      <form onSubmit={addRating} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="teacher"
            value={newRating.teacher}
            onChange={handleInputChange}
            placeholder="Teacher Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="subject"
            value={newRating.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="p-2 border rounded"
            required
          />
          <select
            name="rating"
            value={newRating.rating}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
          <input
            type="text"
            name="comment"
            value={newRating.comment}
            onChange={handleInputChange}
            placeholder="Comment"
            className="p-2 border rounded col-span-2"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            ➕ Add Rating
          </button>
        </div>
      </form>

      <table className="w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating) => (
            <tr key={rating.id} className="text-center border-b">
              <td className="px-4 py-2">{rating.teacher}</td>
              <td className="px-4 py-2">{rating.subject}</td>
              <td className="px-4 py-2">{'⭐'.repeat(rating.rating)}</td>
              <td className="px-4 py-2">{rating.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
