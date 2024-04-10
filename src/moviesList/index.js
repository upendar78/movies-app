import React, {useEffect, useState} from "react"
import "./index.css"
import { useParams } from "react-router-dom"
import Cards from "../components/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()


    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4a9c62f03104a84a45078b8eaf1d8593&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [type])

    

    return (
        <div className="movie__list">
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id}  movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList