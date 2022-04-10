import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <form >
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                    <p>Now to Ema Jhn? <Link className='form-link' to='/signup'>Create an account</Link> </p>
                   
                </form>

            </div>
        </div>
    );
};

export default Login;