export const ADD_MEMBER = "ADD_MEMBER";

// export function addMember() {
//     return { type: ADD_MEMBER };
// }

export const addMember = (name) => {
    return {type: ADD_MEMBER, payload:name}
}