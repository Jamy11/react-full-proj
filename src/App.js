import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Appiontment from './pages/Appiontment';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/appiontment">

              <Appiontment />

            </PrivateRoute>
            <PrivateRoute path="/dashboard">

              <Dashboard />

            </PrivateRoute>
            <PrivateRoute exact path="/appiontment">

              <Appiontment />

            </PrivateRoute>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            {/* <Route path="/">
            <Home />
          </Route> */}
            {/* <Route path='/dashboard/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </Route> */}
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
