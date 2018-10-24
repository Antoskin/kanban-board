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
            // let jj = state.map( tas => tas.id == payload.id ? 
            //         { 
            //             ...tas,
            //             listin: [...tas.tasks , payload.t]
            //         } :
            //         tas)
            return state.map( tas => tas.id == payload.id ? { ...tas, tasks: [...tas.tasks, payload.t] } : tas)
        case 'DELL_TASK':
            //console.log( `del reducer` ) 
            console.log(state.map( del => 
                        del.id == payload.parID ? 
                        {...del, deleter: [...del.tasks, del.tasks.filter(d =>  d.task_id != payload.ownID )]} :
                        del )) 
            //return state.map( del => del.id == payload.parID ? { ...del, deleter: [...del.tasks, del.tasks.filter(d =>  d.task_id != payload.ownID )]   } : del )  
        default:
            return state
    }
}


