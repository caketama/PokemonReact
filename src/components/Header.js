import React from "react";
import pokeball from "../pokeball.jpg";
import { Flex, Box, Image } from "rebass";
import { Link } from "react-router-dom";
import Router from "./Router";
const Header = () => {
  return (
    <Flex>
      <Box width={1} maxWidth='100%'>
        <Link to="/pokemon">
          <Image width="100%" src={pokeball}></Image>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
