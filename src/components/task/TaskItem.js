import React, { Component } from 'react'

import { DragSource } from 'react-dnd';

import RemoveTask from './taskAction/RemoveTask'
import ChangeTask from './taskAction/ChangeTask'
import TaskDetails from './TaskDetails'


const taskSource = {
    beginDrag(props) {
        console.log(`draggin`)
        return props.task
    },
    endDrag(props, monitor, component) {
       return props.handleDrop(props.task.task_id)
    }
}

function collect(connect, monitor) {
    return {
    
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }


class TaskItem extends Component {
  render() {
    const { parentID, parentName, task, isDragging, connectDragSource } = this.props
  
    const opacity = isDragging ? 0 : 1

    return connectDragSource(
            <div style={{opacity}}
                className="task_item"
                key={task.task_id}> 
                {task.task_short} 
                <span className="task_item__btns" >
                    <TaskDetails
                        parentName={parentName}
                        parentIndex={parentID} 
                        task={task}
                    />
                    <ChangeTask
                        task={task}
                        parentIndex={parentID} 
                        ownIndex={task.task_id} />
                    <RemoveTask 
                        parentIndex={parentID} 
                        ownIndex={task.task_id} /> 
                </span>
            </div>
        )   
    }
}

export default DragSource('task', taskSource, collect)(TaskItem);

