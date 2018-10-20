import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import AddTable from './components/AddTable'

class App extends Component {
  render() {
    return (
      <Row center="lg" className="App">
       
          <AddTable />
       
      </Row>
    );
  }
}

export default App;
