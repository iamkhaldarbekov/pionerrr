import React from 'react'
import './product.css'
import {Card} from '../../components'
import img1 from '../../assets/product1.png'
import img2 from '../../assets/product2.png'
import img3 from '../../assets/product3.png'
import img4 from '../../assets/product4.png'
import img5 from '../../assets/product5.png'
import img6 from '../../assets/product6.png'

export default function Product() {
  return (
    <section className="section-product">
      <div className="container">
        <h3 className="title">Продукция</h3>
        <div className='section__cards'>
          <Card name="Сигнализатор уровня" img={img1} />
          <Card name="Датчики давления" img={img2} />
          <Card name="ПИД-регуляторы" img={img3} />
        </div>
        <div className='section__cards section__cards_bottom'>
          <Card name="Калибратор давления" img={img4} />
          <Card name="Корректор расхода газа" img={img5} />
          <Card name="Манометры" img={img6} />
        </div>
      </div>
    </section>
  )
}
