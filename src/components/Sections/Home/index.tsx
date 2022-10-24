import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { candidates } from "../../../utils/candidates.js";
import { Card } from "../../Card";
import "./styles.css";
import { fetchData } from "../../../services/fetchData";

export const Home = () => {
  const [voteCount, setVoteCount] = useState<number>(null);

  useEffect(() => {
    fetchData("api/get_votes_total").then((data) => setVoteCount(data.votes_total));
  }, []);

  const vote = (id) => {
    console.log(id);
    // Vote request on backend
    //voteAction(id);
  };
  return (
    <div className="home-bg">
      <div className="home-container">
        <Row gutter={[30, 40]}>
          {candidates.map((item) => (
            <Col key={item.id} span={24} sm={12} lg={8}>
              <Card human={item} vote={vote} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
