// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function ProtectedRoute({ children, allowedRoles }) {
//   const { user, role, loading } = useAuth();

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <Navigate to="/" />;
//   if (!allowedRoles.includes(role)) return <Navigate to="/" />;

//   return children;
// }
