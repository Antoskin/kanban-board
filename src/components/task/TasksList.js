import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TasksList extends Component {
    render() {
        const { tasks, ind } = this.props

        return <React.Fragment>
                    <TaskItem tasks={tasks} ind={ind}/>
        </React.Fragment>
    }
}
