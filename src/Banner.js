import './Banner.css'

import React, { useEffect, useState } from 'react';

import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <header
            // background image 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">

                <h1 className="banner__title">  {/* title */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">   {/* div > 2 buttons */}
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__descriptions"> {/* descriptions */}
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadebutton"></div>
        </header>
    )
}

export default Banner
