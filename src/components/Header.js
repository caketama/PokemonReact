import React from "react";
import { Flex, Box } from 'rebass';
import  Link  from "./StyledLinks"


const Header = () => {
  return (
    <Flex sx={{justifyContent: "center"}}>
      <Box p={3} width={2/6} color='white' bg='primary'>
        </Box>
      <Box p={3} width={1/6} color='white' bg='primary'>
      <Link to="/lookup">Pokemon</Link>
        </Box>
      <Box p={3} width={1/6} color='white' bg='primary'>
      <Link to="/myteam">MyTeam</Link>
        </Box>
      <Box p={3} width={2/6} color='white' bg='primary'>
        </Box>
    </Flex>
  );
};

export default Header;
