import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdOutlineMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";
import "./newmovieslider.css";
import "swiper/css";

const NewMoviesSlider = ({ movies }) => {
    return (
        <div className="new-movies-slider">
            <h2 className="slider-title"><MdOutlineMovieFilter /> New Movies</h2>

            <Swiper
                modules={[Autoplay]}
                loop={movies.length > 5}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={800}
                breakpoints={{
                    0: { slidesPerView: 3, spaceBetween: 10 },     // mobile
                    768: { slidesPerView: 4, spaceBetween: 20 },   // tablets
                    1024: { slidesPerView: 4, spaceBetween: 20 },  // laptops
                    1280: { slidesPerView: 6, spaceBetween: 20 },  // desktops
                }}
            >

                {movies.map((movie) => {
                    const imageUrl = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.jpg";
                    return (
                        <SwiperSlide key={movie.id}>
                            <Link to={`/movie/${movie.id}`}> {/* ✅ clickable link */}
                                <img
                                    src={imageUrl}
                                    alt={movie.title}
                                    className="movie-slide-image"
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default NewMoviesSlider;
