import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {  } from "../../actionCreators/actionCreators";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

import Navigation from "../Navigation/Navigation";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <div className="main">
        <Navigation />
        <Route path="/" exact>
          <div className="todo-app">
           <h1>ZZDASSTE!!!</h1>
          </div>
        </Route>
        <Route path="/login" exact>
          <div className="todo-app">
            <LoginForm />
          </div>
        </Route>
        <Route path="/register" exact>
          <div className="todo-app">
            <RegisterForm />
          </div>
        </Route>
      </div>
    </Router>
  );
};

export default App;

