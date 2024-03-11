'use client'

import Sidebar from "@/components/organisms/Sidebar"; 

const Setting = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-full grid grid-cols-5">プロフィール設定</div>
    </div>
  );
};

export default Setting;
