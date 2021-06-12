import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Navbar() {
    return (
        <Container className='navbarContainer'>

            
            <PageNavs className='navbar_navItems'>
                    <li className='navbar_listItems'>
                        <Link to='/watchlist'>Watch List</Link>
                    </li>

                    <li className='navbar_listItems'>
                        <Link to='/watched'>Watched</Link>
                    </li>      
            </PageNavs>
            
            
            <HomeLogo className='navbar_navItems'>
                <Link to='/'>Home</Link>
            </HomeLogo>
            
        </Container>
    )
}

export default Navbar

const  Container = styled.nav`
    background-color: #3F51B5;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    height: 60px;
    padding: 0px 50px;

    a:hover, a:active, a:visited, a:link {
        text-decoration: none;
        color: white;
    }
`;

const PageNavs = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;

    li {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
`;

const HomeLogo = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 500;
`;
