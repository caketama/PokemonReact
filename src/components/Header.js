import React from "react";
import { Flex, Box, Image } from "rebass";
import { Link } from "react-router-dom";
import Router from "./Router";
import Pokeball from "./Pokeball";
const Header = () => {
  return (
    <Flex>
      <Box width={1}>
        <Link to="/pokemon"></Link>
        <Pokeball/>
      </Box>
    </Flex>
  );
};

export default Header;
