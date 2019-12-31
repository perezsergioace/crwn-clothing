import React from 'react';

import './signin-and-signup.scss';
import SignIn from '../../components/signin/SignIn';
import SingUp from '../../components/signup/SignUp';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SingUp />
    </div>
)

export default SignInAndSignUpPage;