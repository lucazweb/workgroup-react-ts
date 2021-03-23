import React from "react";
import { Card, UserImage } from "./user-card.styled";

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
