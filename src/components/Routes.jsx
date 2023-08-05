import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Admin from "../pages/Admin";
import Blog from "../pages/Blog";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Logout from "../pages/Logout"
import Moderator from "../pages/Moderator";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

export default function Routes () {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/blog" component={Blog} />

              <PublicRoute exact path="/" component={Landing} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/login" component={Login} />

              <PrivateRoute path="/admin" requiredRole={import.meta.env.VITE_REACT_APP_ADMIN_CODE} component={Admin} />
              <PrivateRoute path="/mod" requiredRole={import.meta.env.VITE_REACT_APP_MOD_CODE} component={Moderator} />
              <PrivateRoute path="/profile" requiredRole={import.meta.env.VITE_REACT_APP_USER_CODE} component={Profile} />

              <Route path="*">
              <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                  <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                      <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</a>
                  </div>
                </div>
              </section>
              </Route>
          </Switch>
          <Footer />
    </ Router>
  )
}