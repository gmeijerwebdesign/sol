import React from "react";
import Contacts from "./components/contacts";
import Teams from "./components/teams";

function Chats({ setNavClick }) {
  return (
    <div>
      <div className="flex flex-col ">
        <p className="p-2 font-bold text-[20px]">Contacts</p>
        <div className="flex items-center ">
          <Contacts setNavClick={setNavClick} />
        </div>
        <Teams />
      </div>
    </div>
  );
}

export default Chats;
