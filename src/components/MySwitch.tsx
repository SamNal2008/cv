import Studies from '../pages/Studies';
import { Redirect, Route, Switch } from "react-router-dom"
import Test from "../pages/Test"
import Home from '../pages/Home';
import InProgress from '../pages/InProgress';
import Projects from '../pages/Projects';
import { useAuthState } from './AuthContext';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProjectView from '../pages/Project';


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
            <Route path='/cv/about' exact component={() => <Test/>}/>
            <Route path='/cv/studies' exact component={() => <Studies/>}/>
            <Route path='/cv/projects' exact component={() => <Projects/>}/>
            <Route path='/cv/experiences' exact component={InProgress}/>
            <Route path='/cv' exact component={() => <Home/>}/>
            <Route path='/cv/in-progress' exact component={InProgress}/>
            <Route path='/cv/project' exact component={ProjectView}/>
            <AuthenticatedRoute path='/cv/profile' exact component={Profile}/>
            <UnauthenticatedRoute exact path='/cv/login' component={Login}/>
            <Redirect to='/cv'/>
        </Switch>
    )
}

export default MySwitch;