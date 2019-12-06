import React from 'react';
import ball from '../pokeball.jpg';
import { Flex, Box, Image } from 'rebass';

const Pokeball = () => {
  return (
      <Flex>
        <Box width={1} maxWidth='100%'>
          <Image width='100%' src={ball}></Image>
        </Box>
      </Flex>
  )
}

export default Pokeball;
