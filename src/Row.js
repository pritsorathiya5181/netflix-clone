// components

import './Row.css'

import React, { useEffect, useState } from 'react';

import Youtube from 'react-youtube';
import axios from './axios';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //  this fetch request data from  "https://api.themoviedb.org/3/fetchurl" 
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies)
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handlerCLick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch(err => console.log(err));
        }
    }


    return (
        <div className="row">
            <h3>{title}</h3>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handlerCLick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
