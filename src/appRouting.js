import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoginComponent } from "./component/auth /login/login.component";
import { RegisterComponent } from "./component/auth /register/register.components";
import { Header } from "./component/common/header/header.component";
import { notFound } from "./component/common/pag/notfound/notfound";
import { DashbardComponent } from "./component/user/dashBoard/dashboard";
import Sidebar from "./component/common/sidebar/sidebar"
import AddProductForm from "./component/product/productForm/add.productForm";
// import SearchProductForm from "./component/product/productForm/edit.productForm";
import EditProductForm from "./component/product/edit-product/edit.productForm";
import viewProductComponent from "./component/product/view-product/viewProduct";


const fullWidth = {
    width: '100%'
}
const marginTop = {
    marginTop: '40px'
}

const About = () => {
    return <p>about Component</p>
}

const Contact = () => {
    return <p>contact Component</p>
}
const Home = () => {
    return <p>home Component</p>
}

let isActive = true;
const setActive = () => {
    isActive = !isActive;
}

const ProtectedRoute = ({ component: Component, ...props }) => (
    <Route {...props} render={(props) => (
        localStorage.getItem('token')
            ? <>
                <Sidebar openSidebar={isActive}></Sidebar>
                <div style={fullWidth} id="content">
                    <Header onClickNavBar={setActive} isLoggedIn={true}></Header>
                    <div style={marginTop} className="container ">
                        <Component {...props}></Component>
                    </div>
                </div>
            </>
            : <Redirect to="/"></Redirect> // TODO redirect in better way
    )}></Route>
)

const PublicRoute = ({ component: Component, ...props }) => (
    <Route {...props} render={(props) => (
        <div style={fullWidth} id="content">
            <div className="main-header">
                <Header onClickNavBar={setActive} isLoggedIn={localStorage.getItem('token')}></Header>
            </div>
            <div className="main">
                <Component {...props}></Component>
            </div>

        </div>
    )}></Route>
)

const AppRoutes = () => {
    return (
        <Router>

            {/* <Header isLoggedIn={localStorage.getItem("token") ? true :false}></Header>
                <Sidebar></Sidebar> */}
            <>
                <Switch>
                    <PublicRoute exact path="/" component={LoginComponent}></PublicRoute>
                    <PublicRoute path="/register" component={RegisterComponent}></PublicRoute>
                    <PublicRoute path="/home" component={Home}></PublicRoute>
                    <ProtectedRoute path="/about" component={About}></ProtectedRoute>
                    <ProtectedRoute path="/contact" component={Contact}></ProtectedRoute>
                    <ProtectedRoute path="/Add Product" component={AddProductForm}></ProtectedRoute>
                    <ProtectedRoute path="/View Product" component={viewProductComponent}></ProtectedRoute>
                    <ProtectedRoute path="/Edit Product/:id" component={EditProductForm}></ProtectedRoute>
                    <ProtectedRoute path="/dashboard" component={DashbardComponent}></ProtectedRoute>
                    <ProtectedRoute component={notFound}></ProtectedRoute>
                </Switch>
            </>


        </Router>
    )
}


export default AppRoutes;