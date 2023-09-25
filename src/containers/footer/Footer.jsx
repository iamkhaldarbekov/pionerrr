import React from 'react'
import './footer.css'
import logo from '../../assets/logo-white.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <img src={logo} alt="img" className="footer__logo" />
          <div>
            <ul className="footer__links">
              <li><a href="#">Главная</a></li>
              <li><a href="#">О предприятии</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Продукция</a></li>
              <li><a href="#">Услуги</a></li>
            </ul>
            <ul className="footer__links">
              <li><a href="#">Поддержка</a></li>
              <li><a href="#">География поставок</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
            <ul className="footer__links">
              <li><a href="#">Файлы</a></li>
              <li><a href="#">Поддержка</a></li>
              <li><a href="#">Политика<br />конфиденциальности</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p>1994 — 2020 ООО «ПИОНЕР»</p>
    </footer>
  )
}
