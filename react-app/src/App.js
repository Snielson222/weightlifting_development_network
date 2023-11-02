import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import UpperBody from "./components/ExerciseComponents/upperBody";
import LowerBody from "./components/ExerciseComponents/lowerBody";
import WarmUp from "./components/ExerciseComponents/warmUp";
import ExerciseShow from "./components/ExerciseComponents/exerciseShow";
import UserPage from "./components/User";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/upperbody'>
            <UpperBody />
          </Route>
          <Route exact path='/lowerbody'>
            <LowerBody />
          </Route>
          <Route exact path='/warmup'>
            <WarmUp />
          </Route>
          <Route exact path="/exercise/:id">
            <ExerciseShow />
          </Route>
          <Route exact path="/user">
            <UserPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
