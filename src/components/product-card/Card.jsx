import React from 'react'
import './card.css'

export default function Card({img, name}) {
  return (
    <div className="card">
        <div className="card__inner">
          <img src={img} alt="img" className="card__img" />
          <p className="card__name">{name}</p>
          <a href="#" className="card__link">Подробнее</a>
        </div>
    </div>
  )
}
