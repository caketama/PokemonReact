import React from "react";
import { Flex, Box } from 'rebass';
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Pokeball from "./Pokeball";

const Header = () => {
  return (
    <Flex>
      <Box width={1}>
        <Link to="/pokemon"></Link>
        <Pokeball />
      </Box>
=======

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
