import React from 'react';
import { Flex, Box } from 'rebass';
import Link from './StyledLink';

const Header = (props) => {
    return (
    <Flex>
        <Box p={3} width={2/6} color='white' bg='secondary'>
        </Box>
        <Box p={3} width={1/6} color='white' bg='secondary'>
            <Link to="/lookup">Lookup</Link>
        </Box>
        <Box p={3} width={1/6} color='white' bg='secondary'>
            <Link to="/team">List</Link>
        </Box>
        <Box p={3} width={1/6} color='white' bg='secondary'>
        </Box>
        <Box p={3} width={1/6} color='white' bg='secondary'>
            <Link onClick={e => props.logout('')}>Log Out</Link>
        </Box>
    </Flex>
    )
}

export default Header;
