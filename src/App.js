import './App.css';

import Banner from './Banner';
import Nav from './Nav';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
    return (
        <div className="app" >
            <Nav />
            <Banner />
            <Row isLargeRow={true}
                title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    );
}

export default App;


// https://netflix-clone-3f2ba.web.app