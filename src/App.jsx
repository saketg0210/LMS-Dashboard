import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Resources from "./pages/Resources";
import Performance from "./pages/Performance";
import Learning from "./pages/Learning";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
