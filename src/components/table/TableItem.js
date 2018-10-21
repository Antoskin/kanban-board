import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Card, Icon } from 'antd'

import { delTable } from '../../actions/index'


class TableItem extends Component {

    handlerDelTable = (ind, e) => {
        e.preventDefault()
        this.props.delTable(ind)
    }

    render() {
        const { name, ind } = this.props
        return (
            <Col lg={8} md={8}>
                <Card   
                    id={ind}
                    title={ name }
                    extra={ <a onClick={this.handlerDelTable.bind(this, ind)} href="#">
                                <Icon type="delete" theme="outlined" />
                            </a> } >

                    <p>Card content</p>
                    
                </Card>
            </Col>
        )
    }
}

const dispatchToProps = {
    delTable
}


export default connect(null, dispatchToProps)(TableItem)
