import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    return (
        
        <div>
            <h2 className="font-bold text-2xl">Login</h2>
                <div className="mt-2">
                    <label>Username</label>
                    <input className="form-control" type="text" value={username} 
                        onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input className="form-control" type="password" value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary mt-2" 
                    // onClick={handleLogin}
                    >
                    Login
                </button>
        </div>
    )
}

export default LoginScreen;