import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from "../Pages/Questions";
import Home from "../Pages/Home";


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/questions" component={Questions} />
            </Switch>
        </Router>
    )
}
export default AppRouter
