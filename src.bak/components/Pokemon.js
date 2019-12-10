import React from 'react';
import { Box, Image, Heading, Text } from 'rebass';
import TeamButton from './TeamButton';

const pokemon = (props) => {
    return (
        <Box
          sx={{
              p:4,
              color: 'text',
              fontFamily: 'body',
              fontWeight: 'body',
              lineHeight: 'body',
              justifyContent: 'center',
              textAlign: 'center'
          }}>
          <Image src={props.image} alt={props.name}/>
          <Heading sx={{textTransform: 'capitalize'}}>{props.name}</Heading>
          <Text mb={1}>Number: {props.number}</Text>
          <Text sx={{textTransform: 'capitalize'}} mb={3}>Type: {props.type}</Text>
          <Text mb={1}>Attack: {props.number}</Text>
          <Text mb={1}>Defense: {props.number}</Text>
          <Text mb={1}>Special Attack: {props.number}</Text>
          <Text mb={1}>Special Defense: {props.number}</Text>
          <Text mb={1}>Speed: {props.number}</Text>
          <TeamButton data={props} />
        </Box>
    )
}

export default pokemon;

