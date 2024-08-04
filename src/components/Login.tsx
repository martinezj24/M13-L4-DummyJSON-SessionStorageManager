import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { saveToken } from './SessionStorageManager';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response: AxiosResponse<{ token: string }> = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password
            });
            const token: string = response.data.token;
            saveToken(token); // Save token using the function from SessionStorageManager
            navigate('/userProfile');
        } catch (err) {
            console.error('Invalid Credentials', err);
            setError('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        sessionStorage.clear();
        setUsername('');
        setPassword('');
        setError(null);
    };

    return (
        <Container>
            <h1>Login Page</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username:"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password:"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
