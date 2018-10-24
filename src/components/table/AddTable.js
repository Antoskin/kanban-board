import React, { Component } from 'react'
import { connect } from 'react-redux'

import uuid from 'uuid'

import { Button, Col } from "antd";
import { createTable } from '../../actions'


class AddTable extends Component {

    handlerCreateTable = () => {

        const newTable = {
            id: uuid(),
            tableName: `default`,
            tasks: [
                {
                    task_id: '', 
                    task_short: '',
                    task_full: '',
                    time_created: '',
                    time_created: null, 
                }
            ]
        }

        this.props.createTable(newTable)
    }

    render() {
        return (
            <Col lg={24}>
                <Button onClick={this.handlerCreateTable}>create</Button>
            </Col>
        )
    }
}


const mapDispatchToProps = {
    createTable
}

export default connect(null, mapDispatchToProps)(AddTable)