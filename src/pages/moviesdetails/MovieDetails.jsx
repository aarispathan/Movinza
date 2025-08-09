import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaYoutube, FaCircleStop } from "react-icons/fa6";
import { TbBrandDisney } from "react-icons/tb";
import { RiNetflixFill, RiAppleFill } from "react-icons/ri";
import Loader from "../../components/loader/Loader"
import { SiPrime } from "react-icons/si";
import { TMDB_API_KEY } from '../../config';
import './moviedetails.css';
import { Col, Container, Row } from 'react-bootstrap';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);

            const fetchPromise = fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`
            ).then(res => res.json());

            const delayPromise = new Promise(resolve => setTimeout(resolve, 1000));

            const [data] = await Promise.all([fetchPromise, delayPromise]);

            setMovie(data);

            const trailer = data?.videos?.results?.find(
                vid => vid.type === 'Trailer' && vid.site === 'YouTube'
            );
            setTrailerKey(trailer?.key || null);

            setLoading(false);
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="movie-details-page-wrapper">
            <Container>
                <Row>
                    <Col>

                        <div className="movie-details-container">
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="movie-info">
                                <h1>Title : {movie.title}</h1>
                                {movie.tagline && <h3 className="tagline">Movie Tagline : "{movie.tagline}"</h3>}

                                <p><strong>Genres :</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
                                <p><strong>Release Date :</strong> {movie.release_date}</p>
                                <p><strong>Status :</strong> {movie.status}</p>
                                <p><strong>Original Language :</strong> {movie.original_language?.toUpperCase()}</p>
                                <p><strong>Spoken Languages :</strong> {movie.spoken_languages?.map(l => l.english_name).join(', ')}</p>
                                <p><strong>Production Countries :</strong> {movie.production_countries?.map(c => c.name).join(', ')}</p>
                                <p><strong>Production Companies :</strong> {movie.production_companies?.map(c => c.name).join(', ')}</p>
                                <p><strong>Budget :</strong> {movie.budget > 0 ? `$${movie.budget.toLocaleString()}` : "N/A"}</p>
                                <p><strong>Revenue :</strong> {movie.revenue > 0 ? `$${movie.revenue.toLocaleString()}` : "N/A"}</p>
                                <p><strong>Rating :</strong> {movie.vote_average} / 10</p>
                                <p><strong>Runtime :</strong> {movie.runtime} min</p>
                                <p><strong>Overview :</strong> {movie.overview}</p>

                                {movie.homepage && (
                                    <p><strong>Website :</strong> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a></p>
                                )}
                                {trailerKey && (
                                    <>
                                        {!showTrailer ? (
                                            <button className="watch-trailer-btn" onClick={() => setShowTrailer(true)}>
                                                <FaYoutube className='trailer-icon' /> Play Trailer
                                            </button>
                                        ) : (
                                            <button className="watch-trailer-btn stop-btn" onClick={() => setShowTrailer(false)}>
                                                <FaCircleStop className='trailer-icon' /> Stop Trailer
                                            </button>
                                        )}
                                    </>
                                )}

                                <div className="movie-reference">
                                    <p><strong>Movies Find Here</strong></p>
                                    <div className="refrennce-buttons">
                                        <button className="disney-btn" onClick={() => window.open('https://www.hotstar.com/in/movies', '_blank')}>
                                            <TbBrandDisney /> disney+ hotstar
                                        </button>
                                        <button className="netflix-btn" onClick={() => window.open('https://www.netflix.com/browse/genre/34399', '_blank')}>
                                            <RiNetflixFill /> netflix
                                        </button>
                                        <button className="amazon-btn" onClick={() => window.open('https://www.primevideo.com/movie', '_blank')}>
                                            <SiPrime /> amazon prime
                                        </button>
                                        <button className="apple-btn" onClick={() => window.open('https://tv.apple.com/in', '_blank')}>
                                            <RiAppleFill /> apple tv
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {trailerKey && showTrailer && (
                            <div className="movie-trailer">
                                <h2>Watch Trailer</h2>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                                    title="Movie Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieDetails;
