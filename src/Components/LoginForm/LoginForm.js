import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { useState } from 'react';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='d-flex flex-column justify-content-center align-items-center border p-5'>
            <h2 className='my-3'>Login</h2>
            <div className='my-3'>
                <label>Username:</label>
                <input className='form-control' type='text' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='my-3'>
                <label>Password:</label>
                <input className='form-control' type='text' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='btn btn-primary my-3' onClick={() => dispatch(login({username: username, password: password}))}>Submit</button>
        </div>
    )
}

export default LoginForm;