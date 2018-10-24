import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TasksList extends Component {
    render() {
        const { tasks, parentID } = this.props

        return <React.Fragment>
                    <TaskItem  
                        task={ tasks }
                        parentID={ parentID } />
        </React.Fragment>
    }
}



export default TasksList