import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_120,c_lfill,g_center,h_120/v1/academind.com/site/max",
      places: 3,
    },
    {
      id: "u2",
      name: "Manuel Lorenz",
      image:
        "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto:eco/dpr_2.0,w_120,c_lfill,g_center,h_120/v1/academind.com/site/manuel",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
