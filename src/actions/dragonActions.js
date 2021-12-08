//1. create our action constant for addMember
export const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (name) =>{
    return {type: ADD_MEMBER , payload: {name: name, dragonStatus: true}}
}