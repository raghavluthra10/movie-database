import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { auth } from '../firebase';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const history = useHistory();

    // login state
    const [ emailLogin, setEmailLogin ] = useState('arjunjuneja@gmail.com');
    const [ passwordLogin, setPasswordLogin ] = useState('hahaha');


    // signup state
    const [ fullName, setFullName ] = useState('');
    const [ emailSignUp, setEmailSignUp ] = useState('');
    const [ passwordSignUp, setPasswordSignUp ] = useState('');
    const [ confirmPasswordSignUp, setConfirmPasswordSignUp ] = useState('');

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailLogin, passwordLogin) 
        .then(() => {
            history.push('/welcome')
        }).catch((e) => alert(e.message))
    };

    const signUp = (e) => {
        e.preventDefault();

        if(fullName === '' || emailSignUp === '' || passwordSignUp === '' || confirmPasswordSignUp === '') {
            alert('please fill in the details for signing up')
        } else {
            if(passwordSignUp === confirmPasswordSignUp) {

                auth.createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
                .then((auth) => db.collection('users').doc(auth.user.uid).collection('userDetails').add({
                    displayName: fullName,
                    email: emailSignUp,
                }))
                .then((auth) => {
                    history.push('/welcome');
                }).catch(e => alert(e.message))
            } else {
                alert('Your password needs to match your confirm password')
            }
        }
    };

    return (
        <>
        <BackgoungBlur />
        <Container >
                <FormLogin>
                    <div>
                        <label> E-mail: </label>
                        <input type='text' value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}  />
                    </div>
                    
                    <div>
                        <label> Password: </label>
                        <input type='password' value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
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
                        <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>

                    <div>
                        <label> E-mail: </label>
                        <input type='text' value={emailSignUp} onChange={(e) => setEmailSignUp(e.target.value)} />
                    </div>

                    <div>
                        <label> Password: </label>
                        <input type='password' value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} />
                    </div>

                    <div>
                        <label> Confirm password: </label>
                        <input type='password'  value={confirmPasswordSignUp} onChange={(e) => setConfirmPasswordSignUp(e.target.value)} />
                    </div>

                    <Button variant="contained" color="primary" type='submit' onClick={signUp}>
                        Sign up
                    </Button>
                </FormSignUp>
         
        </Container>
        </>
    )
}

export default Welcome

const BackgoungBlur = styled.div`
    width: 100%;
    z-index: 1;
    position: absolute;
    background-color: black;
    opacity: 0.5;
    min-height: 100%;
    height: 100vh;
`;

const Container = styled.div`
    background-image: url('https://i.redd.it/4fxxbm4opjd31.jpg');
    img {
        opacity: 0.2;
    }

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* min-height: 100vh; */
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
    z-index: 2;
    background-color: rgb(0,0,0, 0.9);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 40px;
    
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
            color: black;
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

const FormSignUp = styled(FormLogin)`
    margin-top: -60px;
`;

