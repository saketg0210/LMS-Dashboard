// src/components/ClassResources.jsx
import { useState } from "react";

export default function ClassResources() {
  const [resources, setResources] = useState([
    { id: 1, className: "Class 1", name: "Math Book", quantity: 10 },
    { id: 2, className: "Class 2", name: "Science Kit", quantity: 5 },
  ]);

  const [selectedClass, setSelectedClass] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    id: null,
    className: "",
    name: "",
    quantity: "",
  });

  const handleSelectClass = (e) => {
    setSelectedClass(e.target.value);
  };

  const openAddForm = () => {
    setCurrentResource({ id: null, className: selectedClass, name: "", quantity: "" });
    setIsEditing(false);
    setShowForm(true);
  };

  const openEditForm = (resource) => {
    setCurrentResource(resource);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentResource({ ...currentResource, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setResources(
        resources.map((res) =>
          res.id === currentResource.id ? currentResource : res
        )
      );
    } else {
      const newResource = { ...currentResource, id: resources.length + 1 };
      setResources([...resources, newResource]);
    }

    setShowForm(false);
    setCurrentResource({ id: null, className: "", name: "", quantity: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setCurrentResource({ id: null, className: "", name: "", quantity: "" });
  };

  const filteredResources = resources.filter((res) => res.className === selectedClass);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">📚 Class Resources</h2>

      <select
        onChange={handleSelectClass}
        value={selectedClass}
        className="p-2 border rounded mb-4"
      >
        <option value="">Select Class</option>
        <option value="Class 1">Class 1</option>
        <option value="Class 2">Class 2</option>
        <option value="Class 3">Class 3</option>
      </select>

      {selectedClass && (
        <>
          <button
            onClick={openAddForm}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ➕ Add Resource
          </button>

          <table className="w-full mt-4 bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Resource Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="text-center border-b">
                  <td className="px-4 py-2">{resource.name}</td>
                  <td className="px-4 py-2">{resource.quantity}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openEditForm(resource)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                    >
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-96"
          >
            <h2 className="text-2xl font-bold mb-4">
              {isEditing ? "Edit Resource" : "Add Resource"}
            </h2>
            <label className="block mb-2">Resource Name</label>
            <input
              type="text"
              name="name"
              value={currentResource.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={currentResource.quantity}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {isEditing ? "Save Changes" : "Add Resource"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
