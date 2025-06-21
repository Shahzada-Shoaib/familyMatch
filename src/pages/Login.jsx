import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { getAuthToken } from '../../utils/authToken';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      navigate('/profilepage');
    }
    console.log('token in login.jsx', token);
  }, [navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
