import React from "react";
import "./moviescategories.css";

function MoviesCategories({ onCategorySelect, activeCategory }) {
    const genreMap = {
        Popular: "popular",
        TopRated: "top_rated",
        Upcoming: "upcoming",
        NowPlaying: "now_playing",
        Indian: "IN",
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        ScienceFiction: 878,
        TVMovie: 10770,
        Thriller: 53,
        War: 10752,
        Western: 37

    };

    return (
        <div className="movies-categories">
            <p>The movie details and information provided on this site are for informational and educational purposes only. This site does not host, stream, or distribute any movies. All content is sourced from third-party public APIs. Please support the official creators by watching movies through authorized channels.</p>
            {Object.keys(genreMap).map((category) => (
                <button
                    key={category}
                    className={`category-btn ${activeCategory === category ? "active" : ""}`}
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default MoviesCategories;
