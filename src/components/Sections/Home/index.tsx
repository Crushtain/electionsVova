import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { candidates } from "../../../utils/candidates.js";
import { Card } from "../../Card";
import "./styles.css";
import { Counter } from "../Counter";
import { Info } from "../Info";
import {Footer} from "../Footer";
import {useSelector} from "react-redux";
import {
    fetchAppInfo,
    selectLoadingIsVoteStarted,
    selectVoteStatus
} from "../../../redux/slices/appInfo";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

export const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAppInfo());
    }, []);


    const voteStatus = useSelector(selectVoteStatus);
    const isVoteStartedLoading = useSelector(selectLoadingIsVoteStarted);
    console.log(voteStatus)


    const vote = (id) => {
    console.log(id);
    // Vote request on backend
    //voteAction(id);
  };
  return (
    <>

      <Counter voteStatus={voteStatus} isLoading={isVoteStartedLoading} />
      <Info />
      <div className="home-bg">
        <div className="home-container">
          <Row gutter={[30, 40]}>
            {candidates.map((item) => (
              <Col key={item.id} span={24} sm={12} lg={8}>
                <Card human={item} vote={vote} voteStatus={voteStatus} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer/>
    </>
  );
};
