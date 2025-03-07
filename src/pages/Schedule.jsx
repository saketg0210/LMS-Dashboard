import { useState } from "react";

export default function Schedule() {
  const [events, setEvents] = useState([
    { id: 1, title: "Math Class", date: "2025-02-21", teacher: "Mr. Smith", type: "Class" },
    { id: 2, title: "Staff Meeting", date: "2025-02-22", teacher: "Admin", type: "Meeting" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    teacher: "",
    type: "Class",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(events.map((event) => (event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event)));
      setEditingEvent(null);
    } else {
      const eventToAdd = {
        id: events.length + 1,
        ...newEvent,
      };
      setEvents([...events, eventToAdd]);
    }
    setNewEvent({ title: "", date: "", teacher: "", type: "Class" });
    setShowForm(false);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📅 Schedule Management</h1>

      <button
        onClick={() => {
          setEditingEvent(null);
          setNewEvent({ title: "", date: "", teacher: "", type: "Class" });
          setShowForm(true);
        }}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ➕ Add Event
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-96"
          >
            <h2 className="text-2xl font-bold mb-4">{editingEvent ? "Edit Event" : "Add New Event"}</h2>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2">Teacher</label>
            <input
              type="text"
              name="teacher"
              value={newEvent.teacher}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2">Type</label>
            <select
              name="type"
              value={newEvent.type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="Class">Class</option>
              <option value="Meeting">Meeting</option>
              <option value="Workshop">Workshop</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {editingEvent ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      <table className="w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="text-center border-b">
              <td className="px-4 py-2">{event.title}</td>
              <td className="px-4 py-2">{event.date}</td>
              <td className="px-4 py-2">{event.teacher}</td>
              <td className="px-4 py-2">{event.type}</td>
              <td className="px-4 py-2 space-x-2">
               
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  🗑️ Delete
                </button>
                <button
                  onClick={() => handleEdit(event)}
                  className="px-2 py-1 text-white rounded hover:bg-grey-600"
                >
                  ✏️ 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
