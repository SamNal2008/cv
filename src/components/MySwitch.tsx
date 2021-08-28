import Studies from '../pages/Studies';
import { Route, Switch } from "react-router-dom"
import Test from "../pages/Test"
import Home from '../pages/Home';
import InProgress from '../pages/InProgress';
import Projects from '../pages/Projects';

const MySwitch = () => {
    return (
        <Switch>
            <Route path='/about' exact component={() => <Test/>}/>
            <Route path='/studies' exact component={() => <Studies/>}/>
            <Route path='/projects' exact component={() => <Projects/>}/>
            <Route path='/' exact component={() => <Home/>}/>
            <Route path='/' component={() => <InProgress/>}/>
        </Switch>
    )
}

export default MySwitch;