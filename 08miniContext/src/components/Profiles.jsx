import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profiles() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Not logged in</div>;

  return (
    <>
      <div>
        <h1>
          Profile: {user.username} {user.userpassword}
        </h1>
      </div>
    </>
  );
}

export default Profiles;
