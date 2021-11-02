//1. InitialState
//   - add members to initialState
export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}

//2. reducer function (list of our actions)
//  - make reducer function with state and action as arguments.
//  - add in addMember as an action case
//  - default case that returns state
//  - export out our reducer
const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_MEMBER):
            return {
                ...state,
                
            }
        default:
            return state;
    }
}