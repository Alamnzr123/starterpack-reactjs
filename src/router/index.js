import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from '../views/Home/index';
import Login from '../views/Login/index';
import Detail from '../views/Detail/index';
import Product from '../views/Product/index';
import Modal from '../Component/Modal';
import Form from '../Component/Form';
import Notfound from '../views/NotFound/index';
import DynamicFormBuilder from '../Component/DynamicFormBuilder';
import Button from '../Component/Button';
import CatatanSederhana from '../views/CatatanSederhana/index';
import Todolist from '../views/TodolistCRUD/index';
import User from '../views/User/index';
import LoginTypeTwo from '../views/LoginTypeTwo/index';
import TodoListVersiClass from '../views/TodoListVersiClass/index';
import ContohUseReactActivity from '../views/ContohUseReactActivity/index';
import ContohReactContentLoader from '../views/ContohReactContentLoader/index';
import ContohUseRef from '../views/ContohUseRef/index';
import ContohUsingStateinTwoComponent from '../views/ContohUsingStateinTwoComponent/index';
import TodoListVersiTiga from '../views/TodoListVersiTiga/index';
import ContohUseContext from '../views/ContohUseContext/index';
import TodoListVersiEmpat from '../views/TodoListVersiEmpat/index';
import ContohCounterSederhana from '../views/ContohCounterSederhana/index';
import Example from '../views/Example/index';


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
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login">
                    <Route index element={<Login />} />
                    <Route path="/login/:id" element={<Login />} />
                </Route>
                <Route path="/product">
                    <Route index element={<Product />} />
                </Route>
                <Route path="/modal">
                    <Route index element={<Modal />} />
                </Route>
                <Route path="/form">
                    <Route index element={<Form />} />
                </Route>
                <Route path="/logintwo">
                    <Route index element={<LoginTypeTwo />} />
                </Route>
                <Route path="/detail/:id">
                    <Route index element={<Detail />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router;

























// import React from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Button from '../Component/Button';
// import Detail from '../views/Detail/Detail';
// import User from '../views/User';
// import Login from '../views/Login';
// // import Modal from '../Component/Modal';
// import GetQueryParam from '../Component/GetQueryParams';
// import GetParam from '../Component/GetParams';
// import NotFound from '../views/NotFound';

// const Router = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/">
//                         <Route index element={<Button />} />
//                         <Route path="button" element={<Detail />} />
//                         <Route path="params/:id" element={<GetParam />} />
//                         <Route path="params" element={<GetQueryParam />} />
//                         <Route path="login" element={<Login />} />
//                         <Route path="user" element={<User />} />
//                     </Route>
//                     <Route path="*" element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         </>

//     )

// }

// export default Router;