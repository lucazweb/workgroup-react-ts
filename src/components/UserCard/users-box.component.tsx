import React, { useContext, useEffect } from "react";
import { UsersBox, UsersGridWrapper } from "./user-card.styled";
import { UserCard } from "./user-card.component";
import { UserContext } from "../../data/users/context";
import { getUsers } from "../../data/users/actions";

export const UserCardBox: React.FC = () => {
  const {
    state: { users },
    dispatch,
  } = useContext(UserContext);

  useEffect(() => {
    getUsers(function (data) {
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    });
  }, [dispatch]);

  return (
    <UsersBox>
      <UsersGridWrapper>
        {users ? (
          <>
            {users.map((user) => (
              <UserCard user={user} />
            ))}
          </>
        ) : (
          <pre>Sem usuários a exibir</pre>
        )}
      </UsersGridWrapper>
    </UsersBox>
  );
};
