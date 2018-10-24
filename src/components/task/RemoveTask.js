import React, { Component } from 'react'
import { Icon } from 'antd'

import { delTask } from '../../actions'

import {connect} from 'react-redux'

 class RemoveTask extends Component {


    handleDelTask() {
        const {parentIndex, ownIndex} = this.props
        this.props.delTask( parentIndex,  ownIndex)
    }


    render() {
        return (
            <div>
                <Icon 
                    type="close-square" 
                    theme="twoTone" 
                    style={{cursor:'pointer'}} 
                    onClick={ this.handleDelTask.bind(this) } />
            </div>
        )
    }
}

const mapDispatchToProps = {
    delTask
}

export default connect( null, mapDispatchToProps )(RemoveTask)
