import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Select, Input, Tooltip, Button, Row, Col, InputNumber } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

function App() {
  const [exercise, setExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [reps, setReps] = useState(null);

  return (
    <div className="App">
      <Row gutter={16} style={{ width: "400px", margin: "auto" }}>
        <Col span={12}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select an exercise"
            optionFilterProp="children"
            onChange={setExercise}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="bicep-curls">Bicep Curls</Option>
            <Option value="tricep-extensions">Tricep Extensions</Option>
            <Option value="Push-ups">Push-ups</Option>
            <Option value="air-squat">Air Squat</Option>
            <Option value="rowing">Rowing</Option>
            <Option value="running">Running</Option>
            <Option value="Burpees">Burpees</Option>
          </Select>
        </Col>
        <Col span={8}>
          <InputNumber
            min={1}
            max={500}
            defaultValue={reps}
            placeholder="Reps"
            onChange={setReps}
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            disabled={exercise === null || reps === null}
            shape="circle"
            icon={<PlusCircleOutlined />}
            size={"default"}
            onClick={() => {
              setExercises([...exercises, { name: exercise, reps }]);
              setExercise(null);
              setReps(null);
            }}
          />
        </Col>
      </Row>
      Added:{" "}
      <Row>
        {exercises.map(
          (exercise) => `${exercise.name} - ${exercise.reps} reps`
        )}
      </Row>
    </div>
  );
}

export default App;
