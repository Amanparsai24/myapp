import React from "react";
import { lazy } from 'react';
import Categories from "../pages/Setting/Categories/Categories";
import Supplier from "../pages/Setting/Suppliers/Supplier";

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const User = lazy(() => import('../pages/User/Userlist'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const ProductList = lazy(() => import('../pages/Product/ProductList'));
const Setting = lazy(() => import('../pages/Setting/Setting'));


const publicRoutes = [
    { path: "/", component: <Login /> },
    { path: "/login", component: <Login /> },

];

const authProtectedRoutes = [
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/user", component: <User /> },
    { path: "/profile", component: <Profile /> },
    { path: "/product", component: <ProductList /> },
    { path: "/setting", component: <Setting /> },
    { path: "/setting/categories", component: <Categories /> },
    { path: "/setting/suppliers", component: <Supplier /> },

];

export { publicRoutes, authProtectedRoutes };