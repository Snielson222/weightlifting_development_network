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
import SearchPage from "./components/SearchPage";
import Beginner from "./components/ExerciseComponents/beginner";
import Intermediate from "./components/ExerciseComponents/intermediate";
import Advanced from "./components/ExerciseComponents/advanced";

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
          <Route exact path="/beginner">
            <Beginner />
          </Route>
          <Route exact path="/intermediate">
            <Intermediate />
          </Route>
          <Route exact path="/advanced">
            <Advanced />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
