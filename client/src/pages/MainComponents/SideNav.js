import React, { useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { DiScrum } from "react-icons/di";

function SideNav({ handleNavClick, navClick }) {
  useEffect(() => {
    console.log(navClick);
  }, [navClick]);

  return (
    <div className=" bg-navColor1 h-[100vh] w-[10vw] md:w-[20vw] lg:w-[15vw] text-white text-[25px] flex flex-col sm:items-center md:items-start gap-6 p-2">
      <BiMenuAltRight />
      <div className="flex flex-col gap-4">
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "dashboard" ? "text-green-500" : ""
          }`}
        >
          <MdDashboard onClick={(e) => handleNavClick("dashboard")} />
          <p className="hidden md:block text-sm ml-2 ">Dashboard</p>
        </div>
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "chats" ? "text-green-500" : ""
          }`}
        >
          <BsChatSquareTextFill onClick={(e) => handleNavClick("chats")} />
          <p className="hidden md:block text-sm ml-2">Chat</p>
        </div>
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "ai" ? "text-green-500" : ""
          }`}
        >
          <RiRobot2Fill onClick={(e) => handleNavClick("ai")} />
          <p className="hidden md:block text-sm ml-2">Robot</p>
        </div>
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "notes" ? "text-green-500" : ""
          }`}
        >
          <RiStickyNoteAddFill onClick={(e) => handleNavClick("notes")} />
          <p className="hidden md:block text-sm ml-2">Notes</p>
        </div>
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "email" ? "text-green-500" : ""
          }`}
        >
          <MdEmail onClick={(e) => handleNavClick("email")} />
          <p className="hidden md:block text-sm ml-2">Email</p>
        </div>
        <div
          className={`flex flex-col items-center md:flex-row md:items-start ${
            navClick.screen === "scrum" ? "text-green-500" : ""
          }`}
        >
          <DiScrum onClick={(e) => handleNavClick("scrum")} />
          <p className="hidden md:block text-sm ml-2">Scrum</p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
