import React from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";

const users = [
  {
    id: 1,
    name: "Supun",
  },
  {
    id: 2,
    name: "Thiwanka",
  },
  {
    id: 3,
    name: "Jayaweera",
  },
];

const Users = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
