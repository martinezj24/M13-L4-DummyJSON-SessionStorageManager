import { useEffect } from 'react';

const SESSION_TOKEN_KEY = 'jwt_token';

export const saveToken = (token: string): void => {
    try {
        sessionStorage.setItem(SESSION_TOKEN_KEY, token);
    } catch (error) {
        console.error('Failed to save token:', error);
    }
};

export const getToken = (): string | null => {
    try {
        return sessionStorage.getItem(SESSION_TOKEN_KEY);
    } catch (error) {
        console.error('Failed to retrieve token:', error);
        return null;
    }
};

const SessionStorageManager = () => {
    useEffect(() => {
        const token = getToken();
        console.log('Retrieved Token:', token);
    }, []);

    return null;
};

export default SessionStorageManager;
