import React, { Component } from 'react'
import TaskItem from './TaskItem'
import AddTask from './taskAction/AddTask'

class TasksList extends Component {

    deleteTask = (id) => {
        console.log(`del ${id}`)
    }

    render() {
        const { tasks, parentID, parentName } = this.props

        return <React.Fragment>
        { tasks.map( i => (
                    <TaskItem 
                        key={i.task_id}
                        task={ i }
                        parentID={ parentID } 
                        parentName={parentName}
                        handleDrop={(id) => this.deleteTask(id)  }
                    />
        ))}
                <AddTask parentIndex={parentID} />
        </React.Fragment>
    }
}



export default TasksList