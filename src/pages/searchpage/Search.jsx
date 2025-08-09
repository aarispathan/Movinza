/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchMovies } from '../../services/tmdb';
import MovieCard from '../../components/moviecard/MovieCard';
import SearchBar from '../../components/searchbar/SearchBar';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import { Col, Container, Row } from 'react-bootstrap';
import NotFound from '../notfoundpage/NotFound';
import './search.css'

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = async (query) => {
        if (!query) {
            setMovies([]);
            setSearched(false);
            return;
        }

        setLoading(true);
        setError('');
        setSearched(true);

        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (err) {
            setError('Failed to fetch search results.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-page-wrapper">
            <Container>
                <Row>
                    <Col >
                        <SearchBar onSearch={handleSearch} />
                        {loading && <Loader />}
                        {error && <ErrorMessage message={error} />}
                        {searched && movies.length === 0 && <NotFound />}
                        <div className="search-grid">
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;
