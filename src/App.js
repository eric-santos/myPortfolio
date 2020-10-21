import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Navbar = lazy(() => import("./components/Navbar"));
const IconMenu = lazy(() => import("./components/IconMenu"));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <IconMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
