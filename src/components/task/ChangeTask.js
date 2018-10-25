import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'

import {changeTask} from '../../actions'

import { connect } from 'react-redux'

class ChangeTask extends Component {
    state = { 
        visible: false ,
        parentId: null,
        task: { 

        }
    }

    // antd
    showModal = () => this.setState({ visible: true }) 


    handleInput = (e) => {
     
        let upd = new Date()
        this.setState({
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value,
                time_created: upd,
                task_id: uuid()
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
      const { task } = this.state
        const {  ownIndex, parentIndex} = this.props
     
            //console.log( this.state.task )
        
            this.props.changeTask(task, ownIndex, parentIndex)

            this.setState({ visible: false })
        
    }

    cancelClose() {
        this.setState({ visible: false })  
    }


    componentDidMount() {
        const { shortText, fullText } = this.props
        this.setState({
            task: {
                ...this.state.task,
                task_short: shortText,
                task_full: fullText
            }
        })
    }

    render() {
        const { TextArea } = Input;
        let { task } = this.state
        return (
            <React.Fragment>
                <span type="primary" style={{cursor:'pointer'}} onClick={this.showModal}>
                    <Icon type="edit" theme="twoTone" />
                </span>
                <Modal 
                    footer={null}
                    closable={false}
                    visible={this.state.visible} >

                    <form onSubmit={this.onSubmit} >
                        <Input 
                            placeholder="excerpt" 
                            name="task_short"
                            value={task.task_short}
                            onChange={ this.handleInput }
                            />
                        <div style={{ margin: '24px 0' }} />
                        <TextArea 
                            placeholder="complete..." 
                            name="task_full"
                            value={task.task_full}
                            onChange={ this.handleInput }
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
    changeTask
}

export default connect(null, mapDispatchToProps)(ChangeTask)
