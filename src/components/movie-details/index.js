import React, {useEffect, useState} from "react"
import "./index.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [MovieCastDetail, setMovieCast] = useState([])
    const { id } = useParams()

    useEffect(() => {
        // eslint-disable-next-line
        getData()

        getDatas()
        // eslint-disable-next-line
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4a9c62f03104a84a45078b8eaf1d8593&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    const getDatas = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4a9c62f03104a84a45078b8eaf1d8593&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieCast(data.cast))

    }



    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Overview</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <h1 className="casts">CAST</h1>
            <div className="cast-contaienr">

            
                {
                    MovieCastDetail.map(cast => (
                        <div className="cards">
                <img className="cards__img" alt="" src={`https://image.tmdb.org/t/p/original${cast ?cast.profile_path : ""}`} />
                <p className="card__title">{cast.original_name ? cast.original_name :""}</p>
                <div><p className="card__rating">{cast.character ? cast.character : ""}</p>
                    </div>
                    
            </div>

                        
                    ))
                }
               
                
            </div>
        </div>
    )
}

export default Movie