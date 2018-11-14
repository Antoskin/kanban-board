import React, { Component } from 'react'
import { Icon } from 'antd'

import { delTask } from '../../../actions'

import {connect} from 'react-redux'

 class RemoveTask extends Component {


    handleDelTask =() => {
        const {parentIndex, ownIndex} = this.props
        this.props.delTask( parentIndex,  ownIndex)
    }


    render() {
        return (
            <div>
                <Icon 
                    className="hover"
                    type="close-square" 
                    theme="twoTone" 
                    onClick={ this.handleDelTask } />
            </div>
        )
    }
}

const mapDispatchToProps = {
    delTask
}

export default connect( null, mapDispatchToProps )(RemoveTask)
