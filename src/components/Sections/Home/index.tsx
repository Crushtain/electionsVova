import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { candidates } from "../../../utils/candidates.js";
import { Card } from "../../Card";
import "./styles.css";
import { Counter } from "../Counter";
import { Info } from "../Info";
import { Footer } from "../Footer";
import { useSelector } from "react-redux";
import {
  fetchAppInfo,
  selectLoadingIsVoteStarted,
  selectVoteStatus,
} from "../../../redux/slices/appInfo";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateDefaultToken } from "../../../utils/updateDefaultToken";

interface IProps {
  canVote: boolean;
}

updateDefaultToken("UserAuth");

export const Home = (props: IProps) => {
  const { canVote } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAppInfo());
  }, []);

  const voteStatus = useSelector(selectVoteStatus);
  const isVoteStartedLoading = useSelector(selectLoadingIsVoteStarted);

  return (
    <>
      <Counter voteStatus={voteStatus} isLoading={isVoteStartedLoading} />
      <Info />
      <div className="home-bg">
        <div className="home-container">
          <Row gutter={[30, 40]}>
            {candidates.map((item) => (
              <Col key={item.id} span={24} sm={12} lg={8}>
                <Card
                  human={item}
                  voteStatus={voteStatus}
                  canVote={canVote}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};
