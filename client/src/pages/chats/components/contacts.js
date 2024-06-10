import React, { useEffect, useState } from "react";
import axios from "axios";

function Contacts({ setNavClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:4000/auth/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsers(response.data.users);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  const handleClick = (user) => {
    setNavClick({ screen: "chat", userData: user, room_id: user.user_id });
  };

  return (
    <div className="flex gap-1">
      {users.length > 0 &&
        users.map((user, index) => (
          <div key={index} className="p-2" onClick={() => handleClick(user)}>
            <div
              style={{
                backgroundImage: `url(http://localhost:4000${user.image_url})`,
              }}
              className="w-[50px] h-[50px] bg-cover "
            >
              <div className="relative top-[37px] left-[35px] bg-green-500 border-2 border-white rounded w-2.5 h-2.5"></div>
              <p className="relative text-center top-[35px]">{user.username}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Contacts;
