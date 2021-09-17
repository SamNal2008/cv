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
import About from '../pages/About';


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
        <>
            <Route path='/about' exact component={About}/>
            <Route path='/studies' exact component={Studies}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/experiences' exact component={InProgress}/>
            <Route path='/' exact component={Home}/>
            <Route path='/in-progress' exact component={InProgress}/>
            <Route path='/project' exact component={ProjectView}/>
            <Route path='/study' exact component={StudyView}/>
            <Route path='/jobs' exact component={Jobs}/>
            <Route path='/job' exact component={JobView}/>
            <AuthenticatedRoute path='/profile' exact component={Profile}/>
            <UnauthenticatedRoute exact path='/login' component={Login}/>
        </>
    )
}

export default MySwitch;