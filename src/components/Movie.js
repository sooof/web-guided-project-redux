import React, { useReducer } from "react";

const Movie = (props) => {
    return (
        <div>
            {/* <h1>Movies</h1> */}
            <h2>{props.movie}</h2>
        </div>
    )
}
export default Movie;