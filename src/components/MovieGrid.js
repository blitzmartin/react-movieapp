import MovieTile from './MovieTile'
import React, { useState, useEffect } from 'react'
//import movies from './movies'




function MovieGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                console.log(data)
            })
            .catch(err => console.log(err))
        return
    }, [])

    return (
        <div className='movieGrid'>
            {movies.map((item) => {
                return (
                    <MovieTile
                        key = {item._id}
                        movie = {item}
                    />
                )
            })}
        </div>
    )
}

export default MovieGrid


// can use single attributes, attributes are equal to props attributes and item.property should be  equal to object (=item) property
/* function MovieGrid() {
    return (
        <div className='movieGrid'>
            {movies.map((item) => {
                return (
                    <MovieTile
                     movie.name = {item.title}    title is a key in the obj item, while name should be find in props.name 
                    />
                )
            })}
        </div>
    )
} */

