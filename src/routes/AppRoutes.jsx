import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Search from '../pages/searchpage/Search';
import MovieDetails from '../pages/moviesdetails/MovieDetails';
import NotFound from '../pages/notfoundpage/NotFound';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default AppRoutes;
