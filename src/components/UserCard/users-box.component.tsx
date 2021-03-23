import React from "react";
import { UsersBox, UsersGridWrapper } from "./user-card.styled";
import { UserCard } from "./user-card.component";

export const UserCardBox: React.FC = () => {
  return (
    <UsersBox>
      <UsersGridWrapper>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </UsersGridWrapper>
    </UsersBox>
  );
};
