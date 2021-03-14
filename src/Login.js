import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const Signin = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to='/' >
                <div className="img">
                    <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />

                </div>



            </Link>
            <div className="signin">
                <h1>Sign-in</h1>
                <div className="email">

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="password">

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="signinbutton" onClick={Signin}>Sign in</button>
                <h5 className="terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h5>
                <a href="">Need help?</a>
            </div>
            <h4 className="newtoamazon">New to Amazon?</h4>
            <button className="createaccount" onClick={register}>Create your Amazon account</button>
        </div>
    )
}

export default Login
