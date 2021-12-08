import React, { useReducer, useState } from "react";
import {connect} from "react-redux"
import Movie from "./Movie";
import { addMovie } from "../actions";

const MovieList = (props) => {
    const [newMovie, setNewMovie] = useState('')
    // const [state, dispatch] =useReducer( '')
    // console.log("MovieList state = ", state)
    // console.log("MovieList dispatch = ", dispatch)
    // console.log("MovieList state = ", props.state.name)
    // console.log("MovieList state = ", props.movies)
    // props.movies.map((item) =>{
    //     console.log(item)
    // })
    const handleChanges = (e) => {
        setNewMovie(e.target.value)
    }
    const handleaddMovies = (e) => {
        e.preventDefault()
        props.addMovie(newMovie)
    }
    return (
        <div>
            <h1>MovieList</h1>
            <h2>User: {props.user.name}</h2>
            <p>{props.moviesToWatch}</p>
            {
                props.movies.map( (movie, index) => 
                   <Movie movie={movie} key={index}/>
                )
                // props.movies.map((item) =>
                //     // console.log(item)
                //     <p> test </p>
                // )
            }
            <input onChange={handleChanges} value={newMovie}/>
            <button onClick={handleaddMovies} >Add Movie</button>
        </div>
    )
}
const mapStateTpProps = state => {
    console.log("mapStateProps = ", state)
    return{
        user : state.user,
        movies: state.movies,
        moviesToWatch: state.moviesToWatch
    }
}
// export default MovieList;
export default connect(mapStateTpProps, {addMovie})(MovieList);