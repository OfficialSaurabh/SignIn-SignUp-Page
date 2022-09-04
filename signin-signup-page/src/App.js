import SignIn from "./components/SignIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/otp-auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
