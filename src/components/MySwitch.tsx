import Home from '../pages/Home';
import { Route, Switch } from "react-router-dom"
import Test from "../pages/Test"

const MySwitch = () => {
    return (
        <Switch>
            <Route path="/about">
            <Test />
            </Route>
            <Route path="/users">
            <Test />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default MySwitch;