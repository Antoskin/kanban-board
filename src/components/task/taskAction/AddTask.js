import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'
//import Time from 'react-time'
import TheTime from './Time'


import {addTask} from '../../../actions'

import { connect } from 'react-redux'

class AddTask extends Component {
    state = { 
        visible: false ,
        parentId: null,
        task: { }
    }

    // antd
    showModal = () => this.setState({ visible: true }) 
    cancelClose = () => {this.setState({ visible: false })}


    handleInput = (e) => {

        let time = new TheTime()

        this.setState({
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value,
                time_created: time.getTime(),
                task_id: uuid()
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const parentId = this.props.parentIndex
        if( this.state.task.task_short !== undefined && this.state.task.task_full !== '' ) {
            this.props.addTask(this.state.task, parentId )
            this.setState({ 
                visible: false,
                task: {
                    ...this.state.task,
                    task_short: '',
                    time_created: '',
                    task_full: '',
                    task_id: null
                }
            })
        } 
    }


    render() {
        const { TextArea } = Input;
        const { task } = this.state
        return (
            <>
                <Button 
                    className="w-btn add-task_btn" 
                    onClick={this.showModal}>
                        Add task
                </Button>
                <Modal 
                    footer={null}
                    closable={false}
                    visible={this.state.visible} >

                    <form 
                        onSubmit={this.onSubmit} 
                        className="form">
                            <Input 
                                placeholder="excerpt" 
                                name="task_short"
                                value={task.task_short}
                                onChange={ this.handleInput } />
                            <TextArea 
                                placeholder="complete..." 
                                name="task_full"
                                value={task.task_full}
                                onChange={ this.handleInput } />
                            <Input 
                                type="submit" 
                                value="ok" />
                                
                            <Button 
                                className="w-btn"
                                onClick={this.cancelClose} 
                                type="danger" >Cancel</Button>
                    </form>
                </Modal>
            </>
        );
    }
}

const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(AddTask)
