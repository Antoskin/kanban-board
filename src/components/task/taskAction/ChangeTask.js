import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'

import {changeTask} from '../../../actions'

import { connect } from 'react-redux'

class ChangeTask extends Component {
    state = { 
        visible: false ,
        parentId: null,
        task: { }
    }

    // antd
    showModal = () => this.setState({ visible: true }) 
    cancelClose() { this.setState({ visible: false }) }


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
     
        let upd = new Date()
        this.setState({
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value,
                time_changed: this.theTime()
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { task } = this.state
        const {  ownIndex, parentIndex} = this.props
     
            this.props.changeTask(task, ownIndex, parentIndex)

            this.setState({ visible: false })
    }

    


    componentDidMount() {
        const { task } = this.props
        this.setState({
            task: {
                ...this.state.task,
                task_short: task.task_short,
                task_full: task.task_full,
                time_created: task.time_created,
                task_id: task.task_id
            }
        })
    }

    render() {
        const { TextArea } = Input;
        let { task } = this.state
        
        return (
            <React.Fragment>
                <span 
                    className="hover"
                    type="primary" 
                    onClick={this.showModal}>
                        <Icon type="edit" 
                    theme="twoTone" />
                </span>
                <Modal 
                    footer={null}
                    closable={false}
                    visible={this.state.visible} >

                    <form 
                        onSubmit={this.onSubmit} 
                        className="form" >
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
                            onClick={this.cancelClose.bind(this)} 
                            type="danger" >Cancel</Button>
                    </form>
                   
                </Modal>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
    changeTask
}

export default connect(null, mapDispatchToProps)(ChangeTask)
