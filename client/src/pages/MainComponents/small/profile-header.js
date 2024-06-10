import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfileHeader() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:4000/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data.user[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <div className="bg-[#F7F7F7] h-[80px] lg:h-[100px]">
          <p>Welcome {userData.username}</p>

          <img
            src={`http://localhost:4000${userData.image_url}`}
            alt="User Image"
            className="rounded-[50%] w-[40px] h-[40px]"
          />
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
