import React from 'react';
import "../client/scss/app.scss";
import App2 from './App2';
import Login from './Login';
import ErrPage from './ErrPage';
import NavBar from './NavBar';
import Register from './Register';
import PrivateRoute from './utils/privateRout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/suggestEvent" element={<PrivateRoute children={<App2 />} />} />

                <Route path="*" element={<ErrPage />} />

            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;