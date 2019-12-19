import React from 'react';
import { Button, Card, Image, Heading, Flex } from 'rebass';
import TeamContext from '../components/TeamContext';


const Team = (props) => {
return (
  <TeamContext.Consumer>
      {({team, removeFromTeam}) => {
        console.log(team);
        let myTeam = team.map(pokemon => {
          return(
          <Card width={[1/2, 1/3]} key={Math.random()}
            sx={{
              p: 4,
              color: "text",
              fontFamily: "body",
              fontWeight: "body",
              lineHeight: "body",
              justifyContent: "center",
              textAlign: "center"
            }}>
            <Image src={pokemon.image} alt={pokemon.name}/>
            <Heading sx={{textTransform:'capitalize'}}>{pokemon.name}</Heading>
            <Button onClick={e => removeFromTeam(pokemon)}>Remove</Button>
          </Card>
        )})
      return <Flex flexWrap="wrap">{myTeam}</Flex>}
      }
  </TeamContext.Consumer>
  )
}

export default Team;

