import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/login/login";
import SignUp from "../pages/signup/signup";
import MyPage from "../pages/mypage/mypage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/mypage" element={<MyPage />}>
          {/* userId로 라우팅 필요 */}
        </Route>
      </Routes>
    </>
  );
}

export default Router;
