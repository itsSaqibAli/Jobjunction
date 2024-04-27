import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Domains from "./Pages/Domains";
import Listing from "./Pages/Listing";
import Company from "./Pages/Company";
import User from "./Pages/User";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        ></Route>
        <Route path="/domains" element={<Domains />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/u/:id" element={<User />}></Route>
        <Route path="/c/:id" element={<Company />}></Route>
      </Routes>
    </>
  );
}

export default App;
