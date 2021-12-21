import React, { useState } from 'react'
import Loading from '../Loading';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin, isLoggedIn } from '../../actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = ({ history }) => {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.auth);
    const { isAuthenticated, userLoading } = authData;
    const { authError } = authData;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    // console.log(email, password)
    if (isAuthenticated) {
        return <Redirect to={'/'} />
    }
    //handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            setEmailError('Email is required')
        }
        if (password === '') {
            setPasswordError("Password is required")
        } else {
            const loginObj = {
                email: email,
                password: password
            }
            dispatch(signin(loginObj, history))
            // console.log(loginObj);
            setEmail("");
            setPassword("");
        }
    }

    //console.log(authData);
    return (
        <div className="signin">
            <h1>Coinvest</h1>
            <h4>Login</h4>
            {authError ? <div className="auth-error"><p>{authError.error}</p></div> : null}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="email-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                </div>
                {emailError && <p className="login-error-msg">{emailError}</p>}
                <div className="form-group">
                    <label className="password-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                {passwordError && <p className="login-error-msg">{passwordError}</p>}
                {userLoading ? <Loading /> : <button className="btn-user-login">signin</button>}
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signin
