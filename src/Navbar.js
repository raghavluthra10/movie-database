import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './firebase';

function Navbar() {

    const history = useHistory();

    const  logout = () => {
        auth.signOut()
        .then(() => {
            history.push('/')
        }).catch((error) => {
            alert(error.message)
        })
    };


    return (
        <Container className='navbarContainer'>

            
            <PageNavs className='navbar_navItems'>
                    
                <Link to='/watchlist'>Watch List</Link>
            
                <Button  variant="contained" color="primary" size='large' onClick={logout} >
                    Logout
                </Button>
                          
            </PageNavs>
            
            
            <HomeLogo className='navbar_navItems'>
                <Link to='/welcome'>Home</Link>
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

    @media screen and (max-width: 430px) {
        padding: 0px 20px;
    }
`;

const PageNavs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
    max-width: 300px;

    @media screen and (max-width: 430px){
        /* width: 200px; */
        flex: 1;
        justify-content: flex-end;

        button {
            margin-left: 10px;
        }
    }
`;


const HomeLogo = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 500;
`;
