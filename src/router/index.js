import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AccountBox } from '../views/Home/index';
import { LoginForm } from '../views/Login/index';
import { SignupForm } from '../views/Register/index';
import Product from '../views/Product/index';
import Notfound from '../views/NotFound/index';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Outlet />
    }
    else {
        return <Navigate to='/login' />
    }
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route index element={<AccountBox />} />
                </Route>
                <Route path="/login">
                    <Route index element={<LoginForm />} />
                    <Route path="/login/:id" element={<LoginForm />} />
                </Route>
                <Route path="/product">
                    <Route index element={<Product />} />
                </Route>
                <Route path="/register">
                    <Route index element={<SignupForm />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router;