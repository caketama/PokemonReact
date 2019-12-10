import React from "react";
import { Flex, Box } from 'rebass';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Flex sx={{justifyContent: "center"}}>
      <Link to="/lookup">Pokemon</Link>
      <Link to="/myteam">MyTeam</Link>
>>>>>>> master
    </Flex>
  );
};

export default Header;
