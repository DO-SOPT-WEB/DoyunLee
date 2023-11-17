import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LogIn from "./pages/login/LoginPage";
import SignUp from "./pages/signup/SignupPage";
import MyPage from "./pages/mypage/MyPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage/:userId" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
