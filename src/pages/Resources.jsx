import { useState } from "react";
import ClassResources from "../components/ClassResources";

export default function Resources() {
  const [classResources, setClassResources] = useState([
    {
      className: "Class 1",
      resources: [
        { name: "Books", quantity: 30 },
        { name: "Tables", quantity: 15 },
      ],
    },
    {
      className: "Class 2",
      resources: [
        { name: "Monitors", quantity: 10 },
        { name: "Chairs", quantity: 20 },
      ],
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📚 Resource Management</h1>
      {classResources.map((classData) => (
        <ClassResources
          key={classData.className}
          className={classData.className}
          resources={classData.resources}
        />
      ))}
    </div>
  );
}
