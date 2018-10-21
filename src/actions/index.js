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