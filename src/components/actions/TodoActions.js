export function newTask(data) {
    return{
        type:'Add task',
        payload: data
    }
}

export function deleteTask(id) {
    return{
        type:'Remove task',
        payload: id
    }
}