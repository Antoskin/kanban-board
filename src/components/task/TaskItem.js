import React, { Component } from 'react'


import RemoveTask from './taskAction/RemoveTask'
import ChangeTask from './taskAction/ChangeTask'
import TaskDetails from './TaskDetails'




class TaskItem extends Component {
  render() {
    const { parentID, parentName, task } = this.props
  

    return (
            <div className="task_item"
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

export default TaskItem;

