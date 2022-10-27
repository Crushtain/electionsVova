import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "./styles.css";
import { fetchData } from "../../../services/fetchData";

export const Counter = () => {
  const [voteCount, setVoteCount] = useState<number>(null);

  useEffect(() => {
    fetchData("api/get_votes_total").then((data) =>
      setVoteCount(data.votes_total)
    );
  }, []);
  return (
    <div className="counter">
      <Row justify="space-between" align="middle">
        <Col className="counter-text">
          {voteCount ? `Отдано голосов: ${voteCount}` : "Голосование не началось"}
        </Col>
      </Row>
    </div>
  );
};
