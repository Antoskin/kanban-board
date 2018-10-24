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
            //return basket
            return [...state]
        // case 'ADD_TASK':
        //     //console.log(`sdad`)
        //     const newer = state.map( tas =>  tas.id == payload.id ? tas.tasks.push(payload.t) : tas)
        //     return [...state]
            
        default:
            return state
    }
}


