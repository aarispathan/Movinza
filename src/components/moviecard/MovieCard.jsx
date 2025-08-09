import React from 'react';
import { Link } from 'react-router-dom';
import './moviescard.css';

const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci-Fi',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

const MovieCard = ({ movie }) => {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder.jpg';

    const genreNames = movie.genre_ids
        ? movie.genre_ids.map(id => genreMap[id]).filter(Boolean).join(', ')
        : 'N/A';

    return (
        <div className="movie-card">
            <div className="movie-link">
                <img src={imageUrl} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Genres: {genreNames}</p>
            </div>

            <Link to={`/movie/${movie.id}`} className="details-btn">
                View Details
            </Link>
        </div>
    );
};

export default MovieCard;
