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
            tasks: []
        }

        this.props.createTable(newTable)
    }

    render() {
        return (
            <Col lg={24} >
                <Button 
                    className="add-table_btn w-btn" 
                    onClick={this.handlerCreateTable}>Create table</Button>
            </Col>
        )
    }
}


const mapDispatchToProps = {
    createTable
}

export default connect(null, mapDispatchToProps)(AddTable)