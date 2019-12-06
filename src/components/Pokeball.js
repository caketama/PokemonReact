import React from "react";
import ball from "../pokeball.jpg";
import { Route, Link } from "react-router-dom";
import { Flex, Box, Image } from "rebass";
import Router from "./Router";
import Pokemon from './Pokemon'

const Pokeball = () => {
  return (
    <Flex>
      <Box width={1}>
          <Link className="link" to="/pokemon">
            <Image width="100%" src={ball}></Image>
          </Link>
      </Box>
    </Flex>
  );
};

export default Pokeball;
