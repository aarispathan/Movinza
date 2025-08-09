import { fetchPopularMovies } from '../../services/tmdb';
import MoviesCategories from '../../components/moviescategories/MoviesCategories';
import NewMoviesSlider from '../../components/newmovies/NewMoviesSlider';
import MovieGrid from '../../components/moviegrid/MovieGrid';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './home.css';
import TextLoop from '../../components/textloop/TextLoop';

export default function Home() {
    const [sliderMovies, setSliderMovies] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Popular");

    useEffect(() => {
        (async () => {
            const popular = await fetchPopularMovies();
            setSliderMovies(popular);
        })();
    }, []);

    return (
        <div className="home-grid-wrapper">
            <Container>
                <Row>
                    <NewMoviesSlider movies={sliderMovies} />
                    <MoviesCategories
                        activeCategory={activeCategory}
                        onCategorySelect={setActiveCategory}
                    />
                    <TextLoop />


                    <MovieGrid activeCategory={activeCategory} />
                </Row>
            </Container>
        </div>
    );
}
