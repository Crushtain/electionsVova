import React, {FC, useEffect, useState} from "react";
import { Button, Col, Collapse, Row, Typography } from "antd";
import "./styles.css";
import Table from "./Table";
import { fetchData } from "../../services/fetchData";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {adminLogout} from "../../redux/slices/user";
import {updateDefaultToken} from "../../utils/updateDefaultToken";
import {fetchAppInfo, selectVoteStatus} from "../../redux/slices/appInfo";
import {useSelector} from "react-redux";

const { Panel } = Collapse;
const { Title } = Typography;

interface DataType {
  id: number;
  name: string;
  votesCount: number;
  percent: number;
}

const ControlPage:FC = () => {
  const dispatch = useAppDispatch()
  const [tableData, setTableData] = useState<DataType[]>(null)
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("AdminAuth");

  const voteStatus = useSelector(selectVoteStatus);

  useEffect(() => {
    dispatch(fetchAppInfo());
    getCount();
  }, []);
  const getCount = async () => {
    const data = await fetchData("/api/get_vote_results_count/", { token });
    if (data.status === "Ok") {
      setCount(data.get_vote_results_count)
    } else {
      console.error("ошибка при загрузке счетчика");
    }
  }

  const loadData = async () => {
    const data = await fetchData("api/get_vote_results/");
    setTableData(data);
    getCount();
  };

  const startVoting = async () => {
    const { status } = await fetchData("api/start_vote/");
    if (status === 'Ok') {
      alert("Голосование успешно запущено");
    } else {
      alert("Ошибка запуска голосования");
    }
    dispatch(fetchAppInfo());
  };

  const stopVoting = async () => {
    const { status } = await fetchData("api/finish_vote/");
    if (status === 'Ok') {
      alert("Голосование успешно остановлено");
    } else {
      alert("Ошибка остановки голосования");
    }
    dispatch(fetchAppInfo());
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
          <Collapse defaultActiveKey={[1, 2, 3]}>
            <Panel key={1} header="Голосование">
              <Row>
                <Col>
                  {voteStatus === "Started" ? (
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
            >
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <Button type="primary" onClick={loadData}>
                    Загрузить
                  </Button>
                </Col>
                <Col span={24}><Table data={tableData} /></Col>
              </Row>
            </Panel>
            <Panel key={3} header="Лог загрузок">
              {`Количество загрузок: ${count}`}
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default ControlPage;
