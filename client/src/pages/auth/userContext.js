import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:4000/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCurrentUser(response.data.user);
        }
      } catch (error) {
        console.log("Failed to fetch current user", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </UserContext.Provider>
  );
};
