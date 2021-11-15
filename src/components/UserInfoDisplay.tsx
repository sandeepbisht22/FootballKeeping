import React, { useState } from "react";
import Box from "@mui/material/Box";
interface person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  person: person;
}

const UserInfoDisplay: React.FC<Props> = ({ text, person }) => {
  const [count, setCount] = useState<string>("hello");
  //   setCount(null);
  return (
    <div>
      <Box sx={{ display: "flex", p: 1, m: 1, bgcolor: "background.paper" }}>
        {"I'm a flexbox container that uses flex!"}
      </Box>
      {text}
    </div>
  );
};

export default UserInfoDisplay;
