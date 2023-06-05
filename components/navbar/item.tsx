import React from "react";

type Props = {
  name?: string;
  url?: string;
  status?: any;
  callback?: any;
  currentStatus?: any;
};

export const NavbarItem: React.FC<Props> = ({
  name,
  callback,
  status,
  currentStatus,
}) => {
  return (
    <div
      onClick={() => {
        callback(status);
      }}
      className={`${
        currentStatus == status
          ? "text-blue-600 text-md"
          : "text-md hover:text-blue-600  hover:text-lg"
      }  text-white text-center font-bold space-y-1 `}
      style={{ cursor: "pointer", transition: "0.3s", width: 80, height: 20 }}
    >
      <label style={{ cursor: "pointer" }}>{name}</label>

      {currentStatus == status && <hr />}
    </div>
  );
};
