import { useState } from "react";

export default function TeacherAttendance() {
  const [attendance, setAttendance] = useState([
    { id: 1, teacher: "Mr. Smith", date: "2025-02-18", status: "Present" },
    { id: 2, teacher: "Ms. Johnson", date: "2025-02-19", status: "Late" },
  ]);

  const [newAttendance, setNewAttendance] = useState({
    teacher: "",
    date: "",
    status: "Present",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendance({ ...newAttendance, [name]: value });
  };

  const addAttendance = (e) => {
    e.preventDefault();
    const attendanceToAdd = { id: attendance.length + 1, ...newAttendance };
    setAttendance([...attendance, attendanceToAdd]);
    setNewAttendance({ teacher: "", date: "", status: "Present" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">📅 Teacher Attendance</h2>

      <form onSubmit={addAttendance} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="teacher"
            value={newAttendance.teacher}
            onChange={handleInputChange}
            placeholder="Teacher Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={newAttendance.date}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
          <select
            name="status"
            value={newAttendance.status}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="Present">✅ Present</option>
            <option value="Absent">❌ Absent</option>
            <option value="Late">⏰ Late</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ➕ Add Attendance
          </button>
        </div>
      </form>

      <table className="w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id} className="text-center border-b">
              <td className="px-4 py-2">{record.teacher}</td>
              <td className="px-4 py-2">{record.date}</td>
              <td className={`px-4 py-2 ${record.status === "Absent" ? "text-red-500" : record.status === "Late" ? "text-yellow-500" : "text-green-500"}`}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
