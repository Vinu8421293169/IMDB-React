import React, { useEffect, useState } from 'react'
import data from '../data';

export default function Movie(props) {
    const [movie,setMovie]=useState("");

    const id=props.match.params.id;

    useEffect(() => {
        const filteredMovie=data.filter(movie=>movie.imdbID===id)[0];
        setMovie(filteredMovie);

        return () => {
        }
    }, [])

    return (
        <div>{movie.Title}</div>
    )
}
