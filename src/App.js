import React, { Component } from 'react';
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import AddTable from './components/table/AddTable'
import TablesList from './components/table/TablesList'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

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

export default DragDropContext(HTML5Backend)(App)
