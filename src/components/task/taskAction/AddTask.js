import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'
//import Time from 'react-time'


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
    cancelClose() {this.setState({ visible: false })}



    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    theTime = () => {
        const timer = new Date()
        const h = this.addZero(timer.getHours())
        const m = this.addZero(timer.getMinutes())
        const s = this.addZero(timer.getSeconds())

        const tt = `${h}: ${m}: ${s}`

        return tt
    }
   

    handleInput = (e) => {
        this.setState({
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value,
                time_created: this.theTime(),
                task_id: uuid()
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const parentId = this.props.parentIndex
        if( !this.state.task.task_short == '' && !this.state.task.task_full == '' ) {
            this.props.addTask(this.state.task, parentId )
            this.setState({ visible: false })
        } 

        
        this.setState({
            task: {
                ...this.state.task,
                task_short: '',
                time_created: '',
                task_full: '',
                task_id: null
            }
        })
    }


    render() {
        const { TextArea } = Input;
        const { task, task_short } = this.state
        return (
            <React.Fragment>
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
                                value="ok" 
                                style={{cursor:'pointer'}} />
                                
                            <Button 
                                className="w-btn"
                                onClick={this.cancelClose.bind(this)} 
                                type="danger" >Cancel</Button>
                    </form>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(AddTask)
