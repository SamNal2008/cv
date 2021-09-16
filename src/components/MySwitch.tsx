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
import StudyView from '../pages/Study';
import { Collapse, Fade } from '@material-ui/core';
import { useEffect, useState } from 'react';
import JobView from '../pages/Job';
import Jobs from '../pages/Jobs';


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
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        setTimeout(() => setCollapse(true), 300);
    }, [])

    return (
        <Switch>
            <Route path='/cv/about' exact component={() => <Test/>}/>
            <Route path='/cv/studies' exact component={() => <Studies/>}/>
            <Route path='/projects' exact component={() => <Projects/>}/>
            <Route path='/cv/experiences' exact component={InProgress}/>
            <Route path='/cv' exact component={() => <Home/>}/>
            <Route path='/cv/in-progress' exact component={InProgress}/>
            <Route path='/cv/project' exact component={ProjectView}/>
            <Route path='/cv/study' exact component={StudyView}/>
            <Route path='/cv/jobs' exact component={Jobs}/>
            <Route path='/cv/job' exact component={JobView}/>
            <AuthenticatedRoute path='/cv/profile' exact component={Profile}/>
            <UnauthenticatedRoute exact path='/cv/login' component={Login}/>
            <Redirect to='/cv'/>
        </Switch>
    )
}

export default MySwitch;