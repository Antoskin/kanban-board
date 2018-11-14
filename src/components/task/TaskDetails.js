import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';

import RemoveTask from './taskAction/RemoveTask'


export default class TaskDetails extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e)
    this.setState({ visible: false })
  }

  render() {
    const { task, parentIndex, parentName } = this.props
    return (
      <div>
        <span 
            className="hover"
            type="primary" 
            onClick={this.showModal }>
                <Icon type="eye" theme="twoTone" />
        </span>
        <Modal
            title={parentName}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleOk} >
          <b>short</b>
          <p>{task.task_short}</p>
          <b>full</b>
          <p>{task.task_full}</p>
          <p> created: {task.time_created} </p>
          {
            task.time_changed != null ? `updated: ${task.time_changed}` : null
          }

          <RemoveTask 
                parentIndex={parentIndex} 
                ownIndex={task.task_id} />

        </Modal>
      </div>
    );
  }
}


