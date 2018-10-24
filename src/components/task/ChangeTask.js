import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd';
import uuid from 'uuid'

import {changeTask} from '../../actions'

import { connect } from 'react-redux'

class ChangeTask extends Component {
    state = { 
        visible: false ,
        parentId: null,
        changed_title: '',
        changed_text: '',
    }

    // antd
    showModal = () => this.setState({ visible: true }) 


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const parentId = this.props.parentIndex
        const { changed_title, changed_text } = this.state
        if( !changed_title == '' && !changed_text == '' ) {
            //this.props.changeTask(changed_title, changed_text, parentId )
            this.setState({ visible: false })
        } 
    }

    cancelClose() {
        this.setState({ visible: false })  
    }


    componentDidMount() {
        const { shortText, fullText } = this.props
        this.setState({
            changed_title: shortText,
            changed_text: fullText
        })
    }

    render() {
        const { TextArea } = Input;
        let { task, changed_title, changed_text } = this.state
        return (
            <React.Fragment>
                <span type="primary" style={{cursor:'pointer'}} onClick={this.showModal}>
                    <Icon type="plus-circle" theme="twoTone" /> 
                </span>
                <Modal 
                    footer={null}
                    closable={false}
                    visible={this.state.visible} >

                    <form onSubmit={this.onSubmit} >
                        <Input 
                            placeholder="excerpt" 
                            name="changed_title"
                            value={changed_title}
                            onChange={ this.handleInput }
                            />
                        <div style={{ margin: '24px 0' }} />
                        <TextArea 
                            placeholder="complete..." 
                            name="changed_text"
                            value={changed_text}
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
