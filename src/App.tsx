import { Routes, Route } from 'react-router-dom';
import SessionStorageManager from './components/SessionStorageManager';
import Login from './components/Login';

const App = () => {
    return (
        <>
            <SessionStorageManager />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;


