// src/components/Layout.jsx
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar className="sticky top-0 h-screen" style={{
      position: 'sticky',
      left: 0, // or right: 0
      top: 0,
      height: '100vh', // or height: '100%'
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid black',
      width: '200px' // or width: '20%'
    }}/>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
}
