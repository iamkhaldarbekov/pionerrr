import React from 'react'
import './card.css'

export default function Card({img, name, width}) {
  return (
    <div className="card">
        <div className="card__inner">
          <img style={{width: `${width}`}} src={img} alt="img" className="card__img" />
          <p className="card__name">{name}</p>
          <a href="#" className="card__link">Подробнее</a>
        </div>
    </div>
  )
}
