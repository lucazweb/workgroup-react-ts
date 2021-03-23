import React from "react";
import { Card, UserImage } from "./user-card.styled";
import { User } from "../../data/users/types";

interface IUserCardProps {
  user: User;
}

export const UserCard: React.FC<IUserCardProps> = (props) => {
  return (
    <Card>
      <UserImage />
      <div className="">
        <h4 className="text-sm">{props.user.name}</h4>
      </div>
    </Card>
  );
};
