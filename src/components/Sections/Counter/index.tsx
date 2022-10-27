import React, { useEffect, useState } from "react";
import {Col, Row} from "antd";
import { fetchData } from "../../../services/fetchData";
import "./styles.css";

interface IProps {
  voteStatus: string;
  isLoading: boolean;
}

export const Counter = (props: IProps) => {
  const { voteStatus, isLoading = true } = props;
  const [voteCount, setVoteCount] = useState<number>(null);

  useEffect(() => {
    if (voteStatus === 'Started') {
      fetchData("api/get_votes_total").then((data) =>
          setVoteCount(data.votes_total)
      );
    }
  }, []);
  return (
    <div className="counter">
      <Row justify="space-between" align="middle">
        {!isLoading && (
            <Col className="counter-text">
              {voteStatus === 'Started' ? `Отдано голосов: ${voteCount || 0}` : "Голосование не началось"}
            </Col>
        )}
      </Row>
    </div>
  );
};
