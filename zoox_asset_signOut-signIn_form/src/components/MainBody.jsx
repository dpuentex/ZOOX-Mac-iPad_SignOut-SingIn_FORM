import "../assets/css/MainBody.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignOutORSignIn from "./SignOutORSignIn";
import FormSignOut from "../pages/FormSignOut";
import FormSingIn from "../pages/FormSignIn";
function MainBody() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignOutORSignIn />} />
            <Route path="/sign-out" element={<FormSignOut />} />
            <Route path="/sign-in" element={<FormSingIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;
