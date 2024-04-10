import React from "react"
import "./index.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {


  

    return <>
        
    

        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>

            <div className="cards">
                <img className="cards__img" alt="" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <p className="card__title">{movie?movie.original_title:""}</p>
                <div><p className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></p>
                    </div>
                    
            </div>
        
        </Link>
        
    
        </>
}

export default Cards