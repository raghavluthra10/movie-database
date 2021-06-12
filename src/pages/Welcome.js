import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Welcome = () => {

    const login = (e) => {
        e.preventDefault();
    };

    const signUp = (e) => {
        e.preventDefault();
    };

    return (
        <Container >
            <FormLogin>
                <div>
                    <label> E-mail: </label>
                    <input />
                </div>
                
                <div>
                    <label> Password: </label>
                    <input  />
                </div>

                <Button variant="contained" color="primary" type='submit' onClick={login}>
                    Login
                </Button>

                <SignUpInstruction>
                    Don't have an account? Consider Signing up.
                </SignUpInstruction>
                
            </FormLogin>

            

            <FormSignUp>
                <div>
                    <label> Full name: </label>
                    <input type='text' />
                </div>

                <div>
                    <label> E-mail: </label>
                    <input type='text' />
                </div>

                <div>
                    <label> Password: </label>
                    <input type='password' />
                </div>

                <div>
                    <label> Confirm password: </label>
                    <input type='password' />
                </div>

                <Button variant="contained" color="primary" type='submit' onClick={signUp}>
                    Sign up
                </Button>
            </FormSignUp>
            
        </Container>
    )
}

export default Welcome


const Container = styled.div`
    background-image: url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg');
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 50px 50px;
    
    @media(min-width: 1000px) {
        padding: 50px 10vw;
    }
`;

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    
    @media(min-width: 1000px) {
        width: 400px;
    }

    div {
        display: flex;
        flex-direction: column;
        color: white;

        input {
            height: 40px;
            border-radius: 5px;
        }

        label {
            font-weight: 500;
            font-size: 18px;
        }
    }

    button {
        margin-top: 20px;
        font-weight: 600 !important;
        font-size: 14px !important;
    }
`;

const SignUpInstruction = styled.div`
    color: white;
    font-weight: 400;
    margin: 40px 0px;
    text-decoration: underline;
    align-self: center;
`;

const FormSignUp = styled(FormLogin)``;

