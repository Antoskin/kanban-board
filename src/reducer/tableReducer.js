import { list } from './list'


export default (state = list, action) => {
    const { type } = action
    switch(type) {
        case 'ADD_TABLE':
            console.log(`in reducer`)
        default:
            return state
    }

}