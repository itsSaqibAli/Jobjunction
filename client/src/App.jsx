import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Domains from "./Pages/Domains";
import Listing from "./Pages/Listing";
import Company from "./Pages/Company";
import User from "./Pages/User";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        ></Route>
        <Route
          path="/domains"
          element={
            <Domains
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route
          path="/listing"
          element={
            <Listing
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route
          path="/u/:id"
          element={
            <User currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        ></Route>
        <Route
          path="/c/:id"
          element={
            <Company
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
