/* eslint-disable react/prop-types */
import React from 'react';

function Card({
  title, price, coverImg, rating, reviewCount, location, openSpots,
}) {
  const starPath = '/images/Star.png';
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} className="card--image" alt={title} />
      <div className="card--stats">
        <img src={starPath} alt="icon" className="card--star" />
                &nbsp;&nbsp;
        <span>
          {rating}
          &nbsp;
        </span>
        <span className="gray">
          (
          {reviewCount}
          )&nbsp;•&nbsp;
        </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">
          From $
          {price}
        </span>
        {' '}
        / person
      </p>
      <p>
        Open spots:
        {openSpots}
      </p>
    </div>
  );
}

export default Card;
