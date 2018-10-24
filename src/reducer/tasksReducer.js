import { list } from './list'


export default ( state = list, action ) => {
    const { type, payload } = action
    switch( type ) {
        case 'ADD_TASK':
            console.log('here')
            const newer = state.map( tas =>  tas.id == payload.id ? tas.tasks.push(payload.t) : tas)
            return [...state]
        default:
            return state
    }
}