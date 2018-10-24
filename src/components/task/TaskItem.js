import React, { Component } from 'react'
import AddTask from './AddTask'
import RemoveTask from './RemoveTask'
import ChangeTask from './ChangeTask'


export default class TaskItem extends Component {
  render() {
    const { parentID, task } = this.props
    //console.log(task)
   
    const taskItem = task.map( task => 
        <div 
            style={{display:'flex',justifyContent:'space-between'}}
            key={task.task_id}> 
            {task.task_short} 
            <span style={{display:'flex'}} >
                <ChangeTask
                    shortText={task.task_short}
                    fullText={task.task_full} 
                    parentIndex={parentID} 
                    ownIndex={task.task_id} />
                <RemoveTask parentIndex={parentID} ownIndex={task.task_id} /> 
            </span>
        </div>
    )
    
    return <React.Fragment>
                    <AddTask parentIndex={parentID}/>
                    {taskItem}
        </React.Fragment>
    }
}
