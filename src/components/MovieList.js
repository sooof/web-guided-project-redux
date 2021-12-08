import React, { useReducer } from "react";
import {connect} from "react-redux"
import Movie from "./Movie";

const MovieList = (props) => {
    // const [state, dispatch] =useReducer( '')
    // console.log("MovieList state = ", state)
    // console.log("MovieList dispatch = ", dispatch)
    // console.log("MovieList state = ", props.state.name)
    // console.log("MovieList state = ", props.movies)
    // props.movies.map((item) =>{
    //     console.log(item)
    // })
    return (
        <div>
            <h1>MovieList</h1>
            <h2>User: {props.user.name}</h2>
            {
                // props.movies.map( (movie) => {
                //    
                //     // <Movie/>
                // })
                props.movies.map((item) =>
                    // console.log(item)
                    <p> test </p>
                )
            }
            <p></p>
        </div>
    )
}
const mapStateTpProps = state => {
    console.log("mapStateProps = ", state)
    return{
        user : state.user,
        movies: state.movies
    }
}
// export default MovieList;
export default connect(mapStateTpProps, {})(MovieList);