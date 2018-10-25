import { list } from './list'


export default (state = list, action) => {
    const { type, payload } = action
    switch(type) {
        case 'ADD_TABLE':
            return [...state, payload]
            //console.log(`in reducer`)
        case 'DELL_TABLE':
            return  state.filter( ( tabl ) => tabl.id != payload )   
        case 'CHANGE_TITLE':
            let basket = state.map( bas => bas.id == payload.id ? bas.tableName = payload.val : bas )
            return [...state]
        case 'ADD_TASK':
            //const newer = state.map( tas =>  tas.id == payload.id ? tas.tasks.push(payload.t) : tas)
            return state.map( tas => 
                        tas.id == payload.id ? 
                            { ...tas,  tasks: [...tas.tasks, payload.t] } : 
                            tas
                )
        case 'CHANGE_TASK':
        //update, ownId, parentId
            return state.map( item => {
                if( item.id == payload.parentId ) {
                    return {
                        ...item,
                        tasks: item.tasks.map( task => {
                            if( task.task_id ==  payload.ownId) {
                                return {
                                    ...task, ...payload.update
                                }
                            }
                            return task
                        } )
                    }
                } 
                return item
            } )

          
        case 'DELL_TASK':
            return state.map( del => 
                                del.id == payload.parID ? 
                                {
                                    ...del, 
                                    tasks:  del.tasks.filter(d => d.task_id != payload.ownID ) 
                                }
                                : 
                                del )  
        default:
            return state
    }
}


