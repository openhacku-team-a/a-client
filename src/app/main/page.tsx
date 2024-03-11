"use client";

import CareerPreview from "@/components/organisms/CareerPreview"; 
import Sidebar from "@/components/organisms/Sidebar";
import UserList from "@/components/organisms/UserList"; 
import UserSearchForm from "@/components/molecules/UserSearchForm";
import { useState } from "react";
import { UserData } from "../../../proto/typescript/pb_out/main";

const Main = () => {
  const [hoveredUser, setHoveredUser] = useState<UserData | null>(null);

  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-full grid grid-cols-5">
        <div className="col-span-3 p-4 h-screen overflow-scroll hidden-scrollbar">
          <UserSearchForm />
          <UserList setHoveredUser={setHoveredUser} hoveredUser={hoveredUser} />
        </div>
        <div className="col-span-2">
          <CareerPreview user={hoveredUser} />
        </div>
      </div>
    </div>
  );
};

export default Main;
