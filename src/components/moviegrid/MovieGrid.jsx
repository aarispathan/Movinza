import { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';
import { Col, Container, Row, Button } from 'react-bootstrap';
import MovieCard from '../moviecard/MovieCard';
import {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchNowPlayingMovies,
    fetchBollywoodMovies,
    fetchHollywoodMovies,
    fetchMoviesByGenre
} from '../../services/tmdb';
import './moviegrid.css';

const genreMap = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    ScienceFiction: 878,
    TVMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
    Bollywood: "Bollywood"
};

function MovieGrid({ activeCategory }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (!activeCategory) return;
        setMovies([]);
        setPage(1);
        setHasMore(true);
    }, [activeCategory]);

    useEffect(() => {
        if (!activeCategory) return;

        const ROMANCE_GENRE_ID = 10749;

        const fetchMovies = async () => {
            setLoading(true);
            let data = [];

            switch (activeCategory) {
                case "Popular":
                    data = await fetchPopularMovies(page);
                    break;
                case "Top Rated":
                    data = await fetchTopRatedMovies(page);
                    break;
                case "Upcoming":
                    data = await fetchUpcomingMovies(page);
                    break;
                case "Now Playing":
                    data = await fetchNowPlayingMovies(page);
                    break;
                case "Bollywood":
                case "Indian":
                    data = await fetchBollywoodMovies(page);
                    break;
                case "Hollywood":
                    data = await fetchHollywoodMovies(page);
                    break;
                default:
                    if (genreMap[activeCategory]) {
                        data = await fetchMoviesByGenre(genreMap[activeCategory], page);
                    }
                    break;
            }

            data = data.filter(movie => !movie.genre_ids.includes(ROMANCE_GENRE_ID));

            if (data.length === 0) {
                setHasMore(false);
            }

            setMovies(prev => {
                if (page === 1) {
                    return data;
                } else {
                    const newUniqueMovies = data.filter(
                        movie => !prev.some(existing => existing.id === movie.id)
                    );
                    return [...prev, ...newUniqueMovies];
                }
            });
            setLoading(false);
        };

        fetchMovies();
    }, [activeCategory, page]);

    const loadMore = () => {
        if (hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <Container>
            <div className="movies-grid" style={{ width: '100%' }}>
                {loading && movies.length === 0 ? (
                    <Loader />
                ) : (
                    <>
                        <Row>
                            {movies.map(movie => (
                                <Col
                                    key={movie.id}
                                    xl={3}
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    xs={6}
                                    className="home-page-col"
                                >
                                    <MovieCard movie={movie} />
                                </Col>
                            ))}
                        </Row>
                        {hasMore && !loading && (
                            <div className='load-more-button'>
                                <Button onClick={loadMore}>Load More</Button>
                            </div>
                        )}
                        {loading && movies.length > 0 && <Loader />}
                    </>
                )}
            </div>
        </Container>
    );
}

export default MovieGrid;
