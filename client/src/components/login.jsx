import { Box, InputBase, Typography, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticateLogin } from '../service/api';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { NameContext } from '../Context/contexts';
import { FiAlertCircle } from "react-icons/fi";
const InitialLogData = {
    username: "",
    password: "",
};

const Login = () => {
    const [Errors, SetErrors] = useState({});
    const [Submit, SetSubmit] = useState(false);

    const [Logdetails, SetLogDetails] = useState(InitialLogData);
    const navigate = useNavigate();
    const [red, SetRed] = useState(false);



    const { account, SetAccount } = useContext(NameContext);
    const LoginChange = (e) => {
        const { name, value } = e.target;
        SetLogDetails({ ...Logdetails, [name]: value });
    }

    const username = Logdetails.username;
    const password = Logdetails.password;

    const [ShowError, SetShowError] = useState(false);

    const validate = () => {
        const error = {};

        if (!username) {
            error.username = 'Username is required.'
        }

        if (!password) {
            error.password = 'Password is required.'
        }
        return error;
    }

    useEffect(() => {
        if (red) {

            if (Object.keys(Errors).length === 0) {
                SetShowError(true);
            }

        }
        else {
            SetShowError(false);
        }

    }, [Errors, red])

    // console.log(Logdetails);

    const SubmitLog = async () => {
        SetSubmit(true);
        const errors = validate();
        SetErrors(errors);
        console.log(errors);
        // if (!errors) {
        //     throw new Error(SetShowError(true));
        // }

        try {
            const response = await AuthenticateLogin(Logdetails);
            if (response.status === 200) {
                let logval = response.data.message[0].username;
                console.log(logval);
                SetAccount(logval);
                // console.log(response.data.message[0].username);
                navigate('/');
            }
        }

        catch (e) {
            console.log(e);
            SetRed(true);
        }
    }
    // console.log(account);



    return (
        <>
            <div className="login-fullbox">
                <div className="head">DBQ</div>

                <div className="log-head">Login</div>
                {
                    ShowError &&

                    <div className='red-box'>
                        <FiAlertCircle className='alert-icon' />
                        <p className='err-txt'>Incorrect username or password.</p>

                    </div>
                }
                <div className='log-boxs'>
                    <div className="log-elements">
                        <div className='upperpart'>Username</div>
                        <div className='log-field'>
                            <Loginputs placeholder='Username' name='username' onChange={LoginChange}></Loginputs>
                        </div>
                        {Errors.username && <p className='error-msg'>{Errors.username}</p>}
                    </div>
                    <div className="log-elements">
                        <div className='upperpart'>Password</div>
                        <div className='log-field'>
                            <Loginputs placeholder='Password' name='password' onChange={LoginChange} type='password'></Loginputs>
                        </div>
                        {Errors.password && <p className='error-msg'>{Errors.password}</p>}
                    </div>
                    <div className="log-btn-box">
                        <div className="login-btn" onClick={SubmitLog}>Log In</div>
                    </div>
                </div >
                <div className='log-line'></div>
                <div className="no-login">
                    <p className='new-to'>Don't have an account?</p>
                    <Link to="/signup" className="sign-line" >
                        <p>Sign up for DBQ</p>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Login;


const Logfield = styled(Box)`

                height: 3rem;
                min-width : 15rem;
                
                border : 0.08rem solid #FFF;
                border-radius : 0.4rem;
                &:hover {
                    border - width:0.4rem;
}
                `
const Logbox = styled(Box)`
                margin-left: 20%;
                margin-top : 2%;
                width : 26%;
                
                `

const Loginputs = styled(InputBase)`
                font-size: 1rem;
                color: #FFF;
                padding : 2% 4% 2% 4%;
                width : 15rem;
                max-width: 40rem;
                `
const Upperpart = styled(Typography)`
                color: #FFF;
                padding-top:3%;
                font-size: 1.1rem;
                font-weight: 900;
                padding-bottom : 1%;
                `