import './Card.css'
import React from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

const MovieCard = ({ bgImg, movieImg, name, year, actor, duration, type, about }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-content">
          <div className="movie-header">
            <div className="movie-img">
              <img src={movieImg} alt="Movie Image" />
            </div>
            <div className="movie-details">
              <h2 className="movie-name">{name}</h2>
              <p className="movie-actor">{year}, {actor}</p>
              <div className="movie-meta">
                <span className="movie-duration">{duration}</span>
                <span className="movie-type">{type}</span>
              </div>
            </div>
          </div>
          <p className="movie-about">{about}</p>
          <div className="icons">
            <i className="fas fa-share-alt"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-comment-alt"></i>
          </div>
        </div>
        <div className="card-bg">
          <img src={bgImg} alt="Background Image" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
