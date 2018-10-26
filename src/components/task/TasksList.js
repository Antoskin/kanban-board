import React, { Component } from 'react'
import TaskItem from './TaskItem'
import AddTask from './taskAction/AddTask'

class TasksList extends Component {
    render() {
        const { tasks, parentID, parentName } = this.props

        return <React.Fragment>
                    <TaskItem  
                        task={ tasks }
                        parentID={ parentID } 
                        parentName={parentName} />
                    <AddTask parentIndex={parentID} />
        </React.Fragment>
    }
}



export default TasksList