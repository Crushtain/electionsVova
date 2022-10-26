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

  const testData: DataType[] = [
    {
      id: 1,
      name: "asd asd dsadasd",
      votesCount: 12,
      percent: 12,
    },
    {
      id: 2,
      name: "asd asd asd",
      votesCount: 1,
      percent: 50,
    },
    {
      id: 3,
      name: "asd asd",
      votesCount: 123,
      percent: 30,
    },
  ];

  if (isAdmin) {
    return <ControlPage data={testData} />;
  } else {
    return <LogIn />;
  }
};
