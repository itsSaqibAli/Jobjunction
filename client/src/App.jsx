import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Domains from "./Pages/Domains";
import Listing from "./Pages/Listing";
import Company from "./Pages/Company";
import PD from "./Pages/PD";
import ThanksPage from "./Pages/ThanksPage";
import Notification from "./Pages/Notification";
import ErrorPage from "./Pages/ErrorPage";
import EnrollDetail from "./Pages/EnrollDetail";
import ListingCompany from "./Pages/ListingCompany";
import Form from "./Pages/Form";
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
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        ></Route>
        <Route path="/domains" element={<Domains />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/u/:id" element={<User />}></Route>
        <Route path="/c/:id" element={<Company />}></Route>
        <Route path="/pd" element={<PD />}></Route>
        <Route path="/thankspage" element={<ThanksPage />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/errorpage" element={<ErrorPage />}></Route>
        <Route path="/enrolldetail" element={<EnrollDetail />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/listingcompany" element={<ListingCompany />}></Route>
      </Routes>
    </>
  );
}

export default App;
