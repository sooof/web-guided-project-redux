import { ADD_MOVIE } from "../actions";

export const initialState = {
    user: {
        name: 'Dustin'
      },
      movies : ['Star Wars', 'Lord of the Rings', 'Harry Potter'],
      todoList: [{task: 'Learn Redux', id: 0, completed: false}],
      moviesToWatch: 13
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_MOVIE:
            return {...state, movies: [...state.movies, actions.payload]}
        default:
            return state
    }
    // return state
}

export default reducer;