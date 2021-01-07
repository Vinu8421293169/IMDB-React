import React from 'react'

export default function Movies({movies}) {
    return (
        <div className="column">
            {movies.length===0?"No result found":movies.map(movie=><div>{movie.Title}</div>)}
        </div>
    )
}
