import React from "react";
import UserIcon from "../atoms/UserIcon";
import { useRouter } from "next/navigation";
import SidebarIcon from "../atoms/SidebarIcon";
import { logout } from "@/lib/firebase/auth";

const Sidebar = () => {
  const router = useRouter();
  const userIconSize = 48;
  const handleClick = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="w-24 h-screen outline outline-2 items-center flex flex-col justify-between outline-gray-200 ">
      <div className="my-4 flex flex-col gap-y-4">
        <SidebarIcon
          icon={
            <span className="material-symbols-outlined material-icons text-3xl cursor-pointer">
              home
            </span>
          }
          path="/main"
        />
        <SidebarIcon
          icon={
            <span className="material-symbols-outlined material-icons text-3xl cursor-pointer">
              edit
            </span>
          }
          path="/edit"
        />
        <SidebarIcon
          icon={
            <span className="material-symbols-outlined material-icons text-3xl cursor-pointer">
              settings
            </span>
          }
          path="/setting"
        />
        <SidebarIcon
          icon={
            <span className="material-symbols-outlined material-icons text-3xl cursor-pointer">
              logout
            </span>
          }
          onClick={handleClick}
        />
      </div>
      <div className="my-4">
        <UserIcon
          iconImageHash="https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person6.jpg"
          size={userIconSize}
        />
      </div>
    </div>
  );
};

export default Sidebar;