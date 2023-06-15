import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RegisterScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    return (
        
        <div>
            <h2 className="font-bold text-2xl">Register</h2>
            <div className='mt-2'>
                <label>Username</label>
                <input className='form-control' type="text" value={username}
                       placeholder='username'
                    onChange={e => setUsername(e.target.value)}/>
            </div>    
            <div className='mt-2'>
                <label>First Name</label>
                <input className='form-control' type="text" value={firstName}
                       placeholder='first name'
                    onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Last Name</label>
                <input className='form-control' type="text" value={lastName}
                       placeholder='last name'
                    onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Email</label>
                <input className='form-control' type="email" value={email}
                       placeholder='example@email.com'
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Password</label>
                <input className='form-control' type="password" value={password}
                       placeholder='password'
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <button className='btn btn-primary mt-2'
                // onClick={handleRegister}
                >
                Register
            </button>
        </div>
    )
}

export default RegisterScreen;