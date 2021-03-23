import React from "react";
import { Card, UserImage } from "./user-card.styled";
import { UserContext } from "../../data/users/context";

interface IUserCardProps {
  user: any;
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
