import { TMDB_API_KEY, TMDB_BASE_URL } from '../config';

export const fetchPopularMovies = (page = 1) => fetchMoviesByCategory('popular', page);
export const fetchTopRatedMovies = (page = 1) => fetchMoviesByCategory('top_rated', page);
export const fetchUpcomingMovies = (page = 1) => fetchMoviesByCategory('upcoming', page);
export const fetchNowPlayingMovies = (page = 1) => fetchMoviesByCategory('now_playing', page);


export const fetchMoviesByCategory = async (category, page = 1) => {
    try {
        const res = await fetch(
            `${TMDB_BASE_URL}/movie/${category}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
        );
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error(`Failed to fetch ${category} movies:`, err);
        return [];
    }
};

export const fetchMoviesByGenre = async (genreId, page = 1) => {
    try {
        const res = await fetch(
            `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`
        );
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error(`Failed to fetch genre ${genreId} movies:`, err);
        return [];
    }
};

export const fetchBollywoodMovies = async (page = 1) => {
    try {
        const url = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&without_genres=10749&page=${page}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error('Failed to fetch Bollywood movies:', err);
        return [];
    }
};

export const fetchHollywoodMovies = async (page = 1) => {
    try {
        const res = await fetch(
            `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_original_language=en&page=${page}`
        );
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error('Failed to fetch Hollywood movies:', err);
        return [];
    }
};

export const GENRES = {
    Action: 28,
    Adventure: 12,
    Comedy: 35,
    Romance: 10749,
    SciFi: 878
};

export const searchMovies = async (query) => {
    try {
        const res = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error('Search failed:', err);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const res = await fetch(
            `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=videos`
        );
        return await res.json();
    } catch (err) {
        console.error('Details fetch failed:', err);
        return null;
    }
};
