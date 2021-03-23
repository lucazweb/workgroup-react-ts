import React from "react";
import { Card, UserImage } from "./user-card.styled";
import { UserContext } from "../../data/users/context";

export const UserCard: React.FC = () => {
  return (
    <Card>
      <UserImage />
      <div className="">
        <h3>User name</h3>
      </div>
    </Card>
  );
};
