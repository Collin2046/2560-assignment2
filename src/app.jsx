import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';
var agent;
function Welcome() {
    while (agent == null) {
        agent = prompt("Welcome to Collin's blog, Please enter your name below!")
    }
}
function Visiter() {
  return (
      <div className="visitor">
          <p id="vis">🎉Welcome🎉 {agent}!</p>
      </div>
  )
}
// Home function that is reflected across the site
export default function Home() {
  return (
    <Router >
      <Seo />
      <Welcome/>
      <main role="main" className="wrapper" >
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">education</Link>
          <span className="divider">|</span>
          <Link href="/project">project</Link>
          <span className="divider">|</span>
          <Link href="/courses">courses</Link>
          <span className="divider">|</span>
          <Link href="/hobby">hobby</Link>
        </div>
        <Visiter/>
      </footer>
    </Router>
  );
}
