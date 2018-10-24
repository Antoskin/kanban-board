export function createTable(newT) {
    //console.log(`in action`)
    return {
        type: 'ADD_TABLE',
        payload: newT
    }
}


export function delTable(id) {
    console.log(`del action ${id}`)
    return {
        type: `DELL_TABLE`,
        payload: id
    }
}

export function changeTit( ch ) {
    //console.log(`val ${ch.val} id: ${ch.id}`)
    return {
        type: 'CHANGE_TITLE',
        payload: ch
    }
}


export function addTask( t, id ) {
    // console.log(`action task ${t.task_short} and ${t.task_full}`)
    //console.log(id)
    return {
        type: 'ADD_TASK',
        payload: { t, id }
       
    }
}

export function changeTask( t, parID ) {
    return {
        type: 'CHANGE_TASK',
        payload: { t, parID }
       
    }
}


export function delTask( parID, ownID ) {
    console.log(`del action ${parID} and ${ownID}`)
    return {
        type: 'DELL_TASK',
        payload: { parID, ownID }
       
    }
}