import React from 'react'
import './textloop.css';

function TextLoop() {
    return (
        <section className="text-loop-wrapper">
            <div className="list">
                <div className="item">
                    <span className="item-txt">All Movies</span>
                    <span className="item-d">
                        <p className="item-dot dot-t"></p>
                    </span>
                    <span className="item-txt">Movies Details</span>
                    <span className="item-d">
                        <p className="item-dot dot-b"></p>
                    </span>
                    <span className="item-txt">Movies Cast</span>
                    <span className="item-d">
                        <p className="item-dot dot-g"></p>
                    </span>
                    <span className="item-txt">Movies Trailer</span>
                    <span className="item-d">
                        <p className="item-dot dot-y"></p>
                    </span>
                    <span className="item-txt">Movies Information</span>
                    <span className="item-d">
                        <p className="item-dot dot-r"></p>
                    </span>
                </div>
            </div>
            <div className="item">
                <span className="item-txt">All Movies</span>
                <span className="item-d">
                    <p className="item-dot dot-t"></p>
                </span>
                <span className="item-txt">Movies Details</span>
                <span className="item-d">
                    <p className="item-dot dot-b"></p>
                </span>
                <span className="item-txt">Movies Visual</span>
                <span className="item-d">
                    <p className="item-dot dot-g"></p>
                </span>
                <span className="item-txt">Movies Trailer</span>
                <span className="item-d">
                    <p className="item-dot dot-y"></p>
                </span>
                <span className="item-txt">Movies Information</span>
                <span className="item-d">
                    <p className="item-dot dot-r"></p>
                </span>
            </div>
        </section>
    )
}

export default TextLoop