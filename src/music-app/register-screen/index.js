import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../services/auth-thunks';

const RegisterScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("USER");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        try {
            const result = await dispatch(registerThunk({username, password, firstName, lastName, email, userType})).unwrap();
            navigate('/profile'); 
        }
        catch (error) {
            alert("Username already existed! try another one.");
        }
    };

    return (
        
        <div>
            <h2 className="font-bold text-2xl">Register</h2>
            <div className='mt-2'>
                <label>Username</label>
                <input className='form-control' type="text" value={username}
                    onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label htmlFor='user-type'>User type</label>
                <select className="form-control form-select" id="user-type" onChange={e => setUserType(e.target.value)}>
                    <option disabled selected>Select user type</option>
                    <option value="USER" >User</option>
                    <option value="ADMIN" >Admin</option>
                    <option value="ARTIST" >Artist</option>
                </select>
            </div> 
            <div className='mt-2'>
                <label>First Name</label>
                <input className='form-control' type="text" value={firstName}
                    onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Last Name</label>
                <input className='form-control' type="text" value={lastName}
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
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <button className='btn btn-primary mt-2'
                onClick={handleRegister}
                >
                Register
            </button>
        </div>
    )
}

export default RegisterScreen;