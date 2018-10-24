import { combineReducers } from 'redux'
import table from './tableReducer'
import tasks from './tasksReducer'

export default combineReducers({
    table,
    tasks
})