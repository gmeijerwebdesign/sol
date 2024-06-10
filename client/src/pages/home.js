import React, { useEffect, useState } from "react";
import SideNav from "./MainComponents/SideNav";
import Header from "./MainComponents/Header";
import ScreenLoader from "./MainComponents/Screen";

function Home() {
  const [navClick, setNavClick] = useState({
    screen: "dashboard",
    userData: {},
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, redirecting to login.");
      window.location.href = "/login";
    } else {
      console.log("Token found:", token);
    }
  }, []);

  const handleNavClick = (e) => {
    setNavClick({ screen: e });
  };

  return (
    <div>
      <div className="flex">
        <SideNav handleNavClick={handleNavClick} navClick={navClick} />
        <div className="flex flex-col">
          <Header navClick={navClick} />
          <ScreenLoader setNavClick={setNavClick} navClick={navClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;
