import React from 'react'
import './newscard.css'

export default function NewsCard({img, text, date}) {
  return (
    <div className="news-card">
        <img src={img} alt="img" className="news-card__img" />
        <div className="news-card__info">
            <p className="news-card__text">{text}</p>
            <div>
                <a href="#" className="news-card__link">Читать далее</a>
                <span style={{color: '#888'}}>{date}</span>
            </div>
        </div>
    </div>
  )
}
