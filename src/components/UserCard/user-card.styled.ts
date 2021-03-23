import styled from "styled-components";

export const UsersBox = styled.div.attrs({
  className: "container mx-auto px-4",
})``;

export const UsersGridWrapper = styled.div.attrs({
  className: "grid grid-cols-4 space-y gap-2",
})``;

export const Card = styled.div.attrs({
  className:
    "shadow shadow-md flex flex-col justify-center items-center border border-gray-700 rounded-sm m-2 p-6",
})``;

export const UserImage = styled.div.attrs({
  className:
    "ring-1 ring-gray-600 shadow shadow-md w-16 h-16 border border-gray-200 bg-gray-200 rounded-full",
})`
  background-image: url("http://searadedeus.org.br/wp-content/uploads/2018/04/user-unknown-icon.jpg");
  background-size: cover;
`;
