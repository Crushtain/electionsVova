import { useSelector } from "react-redux";
import { Admin } from "./components/Admin";
import { Header } from "./components/Sections/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Sections/Home";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useEffect } from "react";
import {
  fetchUserData,
  logout,
  selectCanVote,
  selectIsAuth,
} from "./redux/slices/user";
import "antd/dist/antd.css";
import { useLogin } from "./hooks/useLogin";
import { updateDefaultToken } from "./utils/updateDefaultToken";
import { fetchData } from "./services/fetchData";

function App() {
  const dispatch = useAppDispatch();
  const login = useLogin();

  useEffect(() => {
    login().then(dispatch(fetchUserData()));
  }, []);

  const isAuthUser = useSelector(selectIsAuth);
  const canVote = useSelector(selectCanVote);

  const logIn = () => {
    fetchData("api/redirect/");
  };
  const logOut = () => {
    dispatch(logout);
    localStorage.removeItem("UserAuth");
    localStorage.removeItem("UserRefresh");
    updateDefaultToken("UserAuth");
    dispatch(fetchUserData());
  };
  return (
    <div className="main">
      <Header isAuthUser={isAuthUser} logIn={logIn} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home canVote={canVote} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
