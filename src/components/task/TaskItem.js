import React, { Component } from 'react'
import AddTask from './AddTask'
import RemoveTask from './RemoveTask'


export default class TaskItem extends Component {
  render() {
    const { tasks, ind } = this.props
    console.log(tasks)
   
    const taskItem = tasks.map( task => 
        <p key={task.task_id}> {task.task_short} </p>
    )

    
    //console.log(typeof tasks)
    
    return <React.Fragment>
                    <AddTask parentIndex={ind}/>
                    { taskItem }
        </React.Fragment>
    }
}
