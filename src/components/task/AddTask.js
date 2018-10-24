import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'
//import Time from 'react-time'


import {addTask} from '../../actions'

import { connect } from 'react-redux'

class AddTask extends Component {
    state = { 
        visible: false ,
        parentId: null,
        task: {
            task_id: 0, 
            task_short: '',
            task_full: '',
            time_created: '',
            time_changed: null, 
        }
    }

    // antd
    showModal = () => this.setState({ visible: true }) 


    handleInputTaskShort = (e) => {
        this.setState({
            task: {
                ...this.state.task,
                task_short: e.target.value,
                task_id: uuid()
            }
        })
    }

    handleInputTaskFull = (e) => {
        let now = new Date()
          
        this.setState({
            task: {
                ...this.state.task,
                time_created: now,
                task_full: e.target.value
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
                task_full: '',
                task_id: null
            }
        })
    }

    cancelClose() {
        this.setState({ visible: false })  
    }

    render() {
        const { TextArea } = Input;
        const { task, task_short } = this.state
        // console.log(this.state.task.task_short)
        return (
            <React.Fragment>
                <Button type="primary" onClick={this.showModal}>
                    <Icon type="plus-circle" theme="twoTone" /> 
                </Button>
                <Modal 
                    footer={null}
                    closable={false}
                    visible={this.state.visible} >

                    <form onSubmit={this.onSubmit} >
                        <Input 
                            placeholder="excerpt" 
                            value={task.task_short}
                            onChange={ this.handleInputTaskShort }
                            />
                        <div style={{ margin: '24px 0' }} />
                        <TextArea 
                            placeholder="complete..." 
                            value={task.task_full}
                            onChange={ this.handleInputTaskFull }
                            />
                        <div style={{ margin: '24px 0' }} />
                        
                        <Input type="submit" value="ok" style={{cursor:'pointer'}} />
                            
                        <Button onClick={this.cancelClose.bind(this)} type="danger" block>cancel</Button>


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
