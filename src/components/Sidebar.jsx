import { Link } from "react-router-dom";
import "../App.css"

export default function Sidebar() {
  return (
    <div className="top-5 w-64 h-screen bg-gray-800 text-white p-5 side-sticky">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-5">
        <li className="mb-3">
          <Link to="/" className="hover:text-gray-400">🏠 Home</Link> {/* Fixed this */}
        </li>
        <li className="mb-3">
          <Link to="/schedule" className="hover:text-gray-400">📅 Schedule</Link>
        </li>
        <li className="mb-3">
          <Link to="/resources" className="hover:text-gray-400">📚 Resources</Link>
        </li>
        <li className="mb-3">
          <Link to="/performance" className="hover:text-gray-400">📊 Performance</Link>
        </li>
        <li className="mb-3">
          <Link to="/learning" className="hover:text-gray-400">Learn</Link>
        </li>
      </ul>
      
    </div>
  );
}
