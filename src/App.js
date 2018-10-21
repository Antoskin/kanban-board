import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import AddTable from './components/AddTable'
import Tables from './components/Tables'

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
