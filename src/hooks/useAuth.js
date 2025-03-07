// import { useEffect, useState } from "react";
// import { auth, db } from "../config/firebase";
// import { doc, getDoc } from "firebase/firestore";

// export function useAuth() {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);
//         if (userSnap.exists()) {
//           setRole(userSnap.data().role);
//         }
//       } else {
//         setUser(null);
//         setRole(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { user, role, loading };
// }
