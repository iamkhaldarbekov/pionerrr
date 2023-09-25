import React from 'react'
import './news.css'
import {NewsCard} from '../../components'
import img1 from '../../assets/news1.jpg'
import img2 from '../../assets/news2.jpg'
import img3 from '../../assets/news3.jpg'

export default function News() {
  return (
    <section className="section-news">
      <div className="container">
        <h3 className="title">Новости</h3>
        <div className="section-news__cards">
          <NewsCard img={img1} date='20.07.2020' text='НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления…' />
          <NewsCard img={img2} date='18.07.2020' text='Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!' />
          <NewsCard img={img3} date='20.06.2020' text='Перенос сроков проведения запланированных работ в 2020 году' />
        </div>
      </div>
    </section>
  )
}
