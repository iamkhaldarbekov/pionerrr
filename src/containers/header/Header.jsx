import React from 'react'
import './header.css'
import {Nav} from '../../components'
import bg from '../../assets/header-bg.jpg'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Nav />
        <div className="header__info">
          <div className="header__title">Российский завод<br />силовых машин</div>
          <div style={{marginTop: '20px', lineHeight: '19px'}}>научно-производственное предприятие,<br />занимающееся разработкой и производством<br />силовых машин.</div>
        </div>
        <img src={bg} alt="img" className="header__background" />
      </div>
    </header>
  )
}
