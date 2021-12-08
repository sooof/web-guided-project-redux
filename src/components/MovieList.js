import React, { useReducer } from "react";
import {connect} from "react-redux"

const MovieList = (props) => {
    const [state, dispatch] =useReducer( '')
    console.log("MovieList state = ", state)
    console.log("MovieList dispatch = ", dispatch)
    console.log("MovieList state = ", props.state.name)
    return (
        <div>
            <h1>MovieList</h1>
            <h1></h1>
        </div>
    )
}
const mapStateTpProps = state => {
    console.log("mapStateProps = ", state)
    return{
        state : state.user
    }
}
// export default MovieList;
export default connect(mapStateTpProps, {})(MovieList);