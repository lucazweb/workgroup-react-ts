import styled from "styled-components";

export const UsersBox = styled.div.attrs({
  className: "container mx-auto px-4",
})``;

export const UsersGridWrapper = styled.div.attrs({
  className: "grid grid-cols-4 space-y gap-2",
})``;

export const Card = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center border border-gray-700 rounded-sm m-2 p-1",
})``;

export const UserImage = styled.div.attrs({
  className: "w-16 h-16 border border-gray-200 bg-gray-200 rounded-full",
})``;
