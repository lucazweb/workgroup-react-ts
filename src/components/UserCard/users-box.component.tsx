import React, { useContext } from "react";
import { UsersBox, UsersGridWrapper } from "./user-card.styled";
import { UserCard } from "./user-card.component";
import { UserContext } from "../../data/users/context";

export const UserCardBox: React.FC = () => {
  const { state } = useContext(UserContext);
  console.log(state);
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
