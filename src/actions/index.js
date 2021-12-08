export const ADD_MOVIE = 'ADD_MOVIE' // Action type

export const addMovie = movieName => { // Action creator
    console.log("Action", movieName);
    return { // Action
        type: ADD_MOVIE,
        payload: movieName
    }
}