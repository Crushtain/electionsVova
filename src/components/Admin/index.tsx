import React, {FC, useEffect} from "react";
import "./styles.css";
import ControlPage from "./ControlPage";
import LogIn from "./LogIn";
import {updateDefaultToken} from "../../utils/updateDefaultToken";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {adminLogin, selectIsAdmin} from "../../redux/slices/user";
import {useSelector} from "react-redux";

interface DataType {
  id: number;
  name: string;
  votesCount: number;
  percent: number;
}

updateDefaultToken("AdminAuth");

export const Admin: FC= () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(adminLogin());
  }, [])

  const isAdmin = useSelector(selectIsAdmin);

  if (isAdmin) {
    return <ControlPage/>;
  } else {
    return <LogIn />;
  }
};
