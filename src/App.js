import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import NavBar from "./components/navbar/NavBar";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useSelector } from "react-redux";




function App() {
  const login = useSelector(state => state.login)
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/login" >{login.user ? <Home /> : <Login />}</Route>
        <Route path="/write" >{login.user ? <Write /> : <Login />}</Route>
        <Route path="/settings" ><Settings /></Route>
        <Route path="/post/:postId" ><Single /></Route>
      </Switch>
    </Router>
  );
}

export default App;
