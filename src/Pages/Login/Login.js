import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import UseFirebase from '../../hooks/UseFirebase/UseFirebase';

const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // setUser(result.user);
                // console.log(result.user)
                history.push(location.state?.from || '/home');
                // console.log("clicked")
            })

    }

    return (
        <div className="text-center my-40">
            <p className="text-6xl font-bold text-center pb-12">Please Login</p>
            <button onClick={handleGoogleLogin} className=" border-2 font-bold text-2xl text-red-200 bg-green-600 px-8 rounded-xl py-3">
                Google Login
            </button>
        </div>
    );
};

export default Login;