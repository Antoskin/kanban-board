import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Card, Icon } from 'antd'

import { delTable } from '../../actions/index'
import TableTitle from './TableTitle'

import TasksList from '../task/TasksList'


class TableItem extends Component {

    handlerDelTable = (ind, e) => {
        e.preventDefault()
        this.props.delTable(ind)
    }

    render() {
        const { name, ind, tasks } = this.props
        return (
            <Col lg={8} md={8}>
                <Card   
                    id={ind}
                    title={ <TableTitle name={name} ind={ind} /> }
                    extra={ <a onClick={this.handlerDelTable.bind(this, ind)} href="#"> 
                                        <Icon type="delete" theme="outlined" /> </a> } >

                    <React.Fragment>
                        <TasksList tasks={tasks} parentID={ind} />
                    </React.Fragment>
                    
                </Card>
            </Col>
        )
    }
}

const dispatchToProps = {
    delTable
}


export default connect(null, dispatchToProps)(TableItem)
