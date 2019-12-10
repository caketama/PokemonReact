import React from 'react';
import { Flex, Box } from 'rebass';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <Flex>
        <Link to="/lookup">Lookup</Link>
        <Link to="/list">List</Link>
    </Flex>
    )
}

export default Header;
