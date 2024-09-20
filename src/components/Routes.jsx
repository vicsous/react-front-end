import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Admin from '../pages/Admin';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Moderator from '../pages/Moderator';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

export default function Routes () {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />

              <PublicRoute exact path="/" component={Landing} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/login" component={Login} />

              <PrivateRoute path="/admin" requiredRole={import.meta.env.VITE_REACT_APP_ADMIN_CODE} component={Admin} />
              <PrivateRoute path="/mod" requiredRole={import.meta.env.VITE_REACT_APP_MOD_CODE} component={Moderator} />
              <PrivateRoute path="/profile" requiredRole={import.meta.env.VITE_REACT_APP_USER_CODE} component={Profile} />
              <PrivateRoute path="/settings" requiredRole={import.meta.env.VITE_REACT_APP_USER_CODE} component={Settings} />

              <Route path="*" component={NotFound} /> 
          </Switch>
          <Footer />
    </ Router>
  )
}
