import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import AddTable from './components/table/AddTable'
import Tables from './components/table/Tables'

class App extends Component {
  render() {
    return (
      <Row center="lg" className="App">
          <AddTable />
          <Tables />
      </Row>
    );
  }
}

export default App;
