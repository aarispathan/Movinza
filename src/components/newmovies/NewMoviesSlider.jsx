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
                spaceBetween={20}
                slidesPerView={Math.min(5, movies.length)}
                breakpoints={{
                    320: { slidesPerView: Math.min(3, movies.length), spaceBetween: 10 },
                    480: { slidesPerView: Math.min(4, movies.length), spaceBetween: 15 },
                    768: { slidesPerView: Math.min(4, movies.length), spaceBetween: 20 },
                    1024: { slidesPerView: Math.min(6, movies.length), spaceBetween: 20 },
                    1280: { slidesPerView: Math.min(6, movies.length), spaceBetween: 20 },
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
