import Studies from '../pages/Studies';
import { Redirect, Route, Switch } from "react-router-dom"
import Test from "../pages/Test"
import Home from '../pages/Home';
import InProgress from '../pages/InProgress';
import Projects from '../pages/Projects';
import { useAuthState } from '../utils/AuthContext';
import Login from '../pages/Login';


const AuthenticatedRoute = ({component: Component, ...props}: any) => {
    const { isAuthenticated } = useAuthState();
    return (
        <Route {...props}
        render={
            routeProps => isAuthenticated ? <Component {...routeProps} /> : <Redirect to='/'/>
        }/>
    )
}

const UnauthenticatedRoute = ({component: Component, ...props}: any) => {
    const { isAuthenticated } = useAuthState();
    return (
        <Route {...props}
        render={
            routeProps => !isAuthenticated ? <Component {...routeProps} /> : <Redirect to='/'/>
        }/>
    )
}

const MySwitch = () => {
    return (
        <Switch>
            <Route path='/about' exact component={() => <Test/>}/>
            <Route path='/studies' exact component={() => <Studies/>}/>
            <Route path='/projects' exact component={() => <Projects/>}/>
            <Route path='/' exact component={() => <Home/>}/>
            <Route path='/in-progress' exact component={InProgress}/>
            <UnauthenticatedRoute exact path='/login' component={Login}/>
            <Redirect to='/in-progress'/>
        </Switch>
    )
}

export default MySwitch;