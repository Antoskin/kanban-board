import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import AddTable from './components/table/AddTable'
import TablesList from './components/table/TablesList'

class App extends Component {
  render() {
    return (
      <Row center="lg" className="App">
          <AddTable />
          <TablesList />
      </Row>
    );
  }
}

export default App;
