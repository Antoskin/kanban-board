import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col } from "antd";
import {createTable} from './../actions'

class AddTable extends Component {

    render() {
        return (
        <Col lg={24}>
            <Button onClick={this.props.createTable}>create</Button>
        </Col>
        )
    }
}


const mapDispatchToProps = {
    createTable
}

export default connect(null, mapDispatchToProps)(AddTable)