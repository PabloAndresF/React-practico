import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import "../styles/global.css"
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAcount from '../pages/MyAcount';
import CreateAcount from '../pages/CreateAcount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext';
import useInitialState from "../hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/password-recovery' element={<PasswordRecovery />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/new-password' element={<NewPassword />} />
                        <Route path='/acount' element={<MyAcount />} />
                        <Route path='/signup' element={<CreateAcount />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>

    );
}

export default App;