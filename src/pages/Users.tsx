import React from "react";
import { UserCardBox } from "../components/UserCard/users-box.component";

export const Users: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 self-center justify-items-center border border-b-2 border-gray-600 bg-gray-600 ">
        <h1 className="text-1xl text-white">Workgroup app</h1>
      </div>
      <UserCardBox />
    </>
  );
};
