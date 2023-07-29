import { Box, InputBase, Typography, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticateSignUp } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../Context/contexts';

const InitialSignupData = {
    username: "",
    email: "",
    password: "",
};



const SignUp = () => {
    const navigate = useNavigate();

    const { SetAccount } = useContext(NameContext);
    const [errors, SetErrors] = useState([]);



    const [Signdetails, SetSignDetails] = useState(InitialSignupData);

    const SignChange = (e) => {
        const { name, value } = e.target;
        SetSignDetails({ ...Signdetails, [name]: value });
    }
    console.log(Signdetails);

    const email = Signdetails.email;
    let password = Signdetails.password;
    let username = Signdetails.username;

    console.log(password);


    const validate = () => {
        const error = {};


        if (!email) {
            error.email = 'You need to enter your email.';
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            error.email = "This email is invalid. Make sure it\'s written like example @email.com";
        }
        else {
            error.email = '';
        }


        if (!username) {
            error.username = 'You need to enter your username.';
        }
        else if (username.length < 3) {
            error.username = "Your username should be atleast of 3 characters";
        }
        else {
            error.username = '';
        }

        if (!password) {
            error.password = 'You need to enter your password.';
        }
        else if (password.length < 8) {
            error.password = 'Your password should atleast contain 8 characters';
        }
        else {
            error.password = '';
        }

        return error;

    }

    const SubmitSign = async () => {
        const errors = validate();
        SetErrors(errors);

        const response = await AuthenticateSignUp(Signdetails);
        if (response) {

            let logval = response.data.message.username
            // console.log(response.data.message.username);
            SetAccount(logval);
            navigate('/');
        }
        else {
            console.log('Error while signing up')
        }
    }


    return (
        <>
            <div className="signup-full">
                <div className="login-fullbox">
                    <div className="head">DBQ</div>
                    <div className="sign-head">Signup</div>
                    <div className='sign-box'>
                        <div className="log-elements">
                            <Upperpart>Your Username?</Upperpart>
                            <Logfield>
                                <Loginputs placeholder='Enter the username' name='username' onChange={SignChange}></Loginputs>
                            </Logfield>
                            {errors.username &&
                                <div className='error-msg'>{errors.username}</div>}
                        </div>
                        <div className="log-elements">
                            <Upperpart>What's your e-mail?</Upperpart>
                            <Logfield>
                                <Loginputs placeholder='Enter your e-mail.' name='email' onChange={SignChange} type='email'> </Loginputs>
                            </Logfield>
                            {errors.email &&
                                <div className='error-msg'>{errors.email}</div>}
                        </div>
                        <div className="log-elements">
                            <Upperpart>Create a password</Upperpart>
                            <Logfield>
                                <Loginputs placeholder='Create a password.' name='password' onChange={SignChange} type='password'></Loginputs>
                            </Logfield>
                            {errors.password &&
                                <div className='error-msg'>{errors.password}</div>}
                        </div>

                        <div className="sign-btn-box">
                            <div className="sign-btn" onClick={SubmitSign}>Sign Up</div>
                        </div>


                    </div>
                    <div className='log-line'></div>
                    <div className="no-sign-up">
                        <p className='new-to'>Have an account?</p>
                        <Link to="/login" className="sign-line" >
                            <p>Log in.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>);
}

export default SignUp;

const Logfield = styled(Box)`

                height: 3rem;
                width : 110%;
                border : 0.08rem solid #FFF;
                border-radius : 0.4rem;
                &:hover {
                    border - width:0.1rem;
}
                `
const Logbox = styled(Box)`
                margin-left: 16%;
                margin-top : 2%;
                min-width: 15rem;
                max-width: 22rem;
               `

const Loginputs = styled(InputBase)`
                font-size: 1.1rem;
                color: #FFF;
                padding : 2% 4% 2% 4%;
                `
const Upperpart = styled(Typography)`
                color: #FFF;
                padding-top:3%;
                font-size: 1.1rem;
                font-weight: 900;
                padding-bottom : 1%;
                width:100%;
                `