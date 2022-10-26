import React from "react";
import { Button, Col, Collapse, Row, Typography } from "antd";
import "./styles.css";
import Table from "./Table";
import { fetchData } from "../../services/fetchData";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {adminLogout} from "../../redux/slices/user";
import {updateDefaultToken} from "../../utils/updateDefaultToken";

const { Panel } = Collapse;
const { Title } = Typography;

interface DataType {
  id: number;
  name: string;
  votesCount: number;
  percent: number;
}

interface IProps {
  data: DataType[];
}

const ControlPage = (props: IProps) => {
  const dispatch = useAppDispatch()

  const { data } = props;
  const isVotingStarted = false;

  const loadData = () => {
    fetchData("api/get_vote_results/")
  };

  const startVoting = () => {
    fetchData("api/start_vote/");
  };

  const stopVoting = () => {
    fetchData("api/finish_vote/");
  };

  return (
    <div className="admin-control-wrapper">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              <Title level={3}>Администрирование</Title>
            </Col>
            <Col>
              <Button onClick={() => {
                localStorage.removeItem("AdminAuth");
                localStorage.removeItem("AdminRefresh");
                updateDefaultToken("AdminAuth");
                dispatch(adminLogout())
              }} danger>Выйти из панели администрирования</Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Collapse defaultActiveKey={1}>
            <Panel key={1} header="Голосование">
              <Row>
                <Col>
                  {isVotingStarted ? (
                    <Button
                      size="large"
                      type="primary"
                      danger
                      onClick={stopVoting}
                    >
                      Остановить голосование
                    </Button>
                  ) : (
                    <Button size="large" type="primary" onClick={startVoting}>
                      Запуск голосования
                    </Button>
                  )}
                </Col>
              </Row>
            </Panel>
            <Panel
              key={2}
              header="Промежуточные результаты"
              extra={
                <Button type="primary" onClick={loadData}>
                  Загрузить
                </Button>
              }
            >
              <Table data={data} />
            </Panel>
            <Panel key={3} header="Лог загрузок"></Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default ControlPage;
