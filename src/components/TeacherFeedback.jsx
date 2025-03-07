import { useState } from "react";

export default function TeacherFeedback() {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, teacher: "Mr. Smith", feedback: "Excellent teaching skills!", rating: 5, date: "2025-02-18" },
    { id: 2, teacher: "Ms. Johnson", feedback: "Needs to improve time management.", rating: 3, date: "2025-02-19" },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    teacher: "",
    feedback: "",
    rating: 1,
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const addFeedback = (e) => {
    e.preventDefault();
    const feedbackToAdd = { id: feedbacks.length + 1, ...newFeedback };
    setFeedbacks([...feedbacks, feedbackToAdd]);
    setNewFeedback({ teacher: "", feedback: "", rating: 1, date: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📝 Teacher Feedback</h2>

      <form onSubmit={addFeedback} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="teacher"
            value={newFeedback.teacher}
            onChange={handleInputChange}
            placeholder="Teacher Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={newFeedback.date}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
          <textarea
            name="feedback"
            value={newFeedback.feedback}
            onChange={handleInputChange}
            placeholder="Write feedback..."
            className="p-2 border rounded col-span-2"
            required
          />
          <select
            name="rating"
            value={newFeedback.rating}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            ➕ Add Feedback
          </button>
        </div>
      </form>

      <table className="w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">Feedback</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb.id} className="text-center border-b">
              <td className="px-4 py-2">{fb.teacher}</td>
              <td className="px-4 py-2">{fb.feedback}</td>
              <td className="px-4 py-2">{'⭐'.repeat(fb.rating)}</td>
              <td className="px-4 py-2">{fb.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
