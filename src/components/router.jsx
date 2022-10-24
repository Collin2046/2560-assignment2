import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
import Courses from "../pages/courses";
import Hobby from "../pages/hobby";
/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/courses" component={Courses} />
      <Route path="/hobby" component={Hobby} />
    </Switch>
);
