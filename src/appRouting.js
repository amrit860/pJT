import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { LoginComponent } from "./component/auth /login/login.component";
import { RegisterComponent } from "./component/auth /register/register.components";
import { Header } from "./component/common/header/header.component";
import { notFound } from "./component/common/pag/notfound/notfound";
import { DashbardComponent } from "./component/user/dashBoard/dashboard";

const About=()=>{
    return<p>About Component</p>
}

const Home=()=>{
    return<p>Home Component</p>

}
const contact=()=>{
    return<p>contact Component</p>
}


const AppRoutes=()=>{
    return(
        <Router>
            
            <Header isLoggedIn={true}></Header>
            <Switch>
            <Route exact path="/" component={LoginComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/dashboard" component={DashbardComponent}></Route>
            <Route component={notFound}></Route>   
            </Switch>
          
        </Router>
    )

}
export default AppRoutes;