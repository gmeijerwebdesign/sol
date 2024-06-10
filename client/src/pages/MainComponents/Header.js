import React from "react";
import ProfileHeader from "./small/profile-header";

function Header({ navClick }) {
  return (
    <div className="flex w-[90vw]  md:w-[80vw] lg:w-[85vw] h-[80px] lg:h-[100px] ">
      <div className=" bg-[#F7F7F7] w-[100%] ">
        <div className="p-2 flex flex-col gap-4">
          <p className="font-bold text-[20px]  ">{navClick.screen}</p>
          <div className="flex text-[10px]">
            <p className="font-light">home/</p>
            <p className="font-bold">{navClick.screen}</p>
          </div>
        </div>
      </div>
      <ProfileHeader />
    </div>
  );
}

export default Header;
