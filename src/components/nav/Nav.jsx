import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import {useState} from 'react'
import './nav.css'
import logo from '../../assets/logo.svg'

export default function Nav() {
  const [visible, setVisible] = useState(false)
  
  return (
    <nav className="nav">
      <div className="nav__info">
        <img src={logo} alt="logo" className="nav__logo" />
        <div className="nav__extra">
          <div>
            <p>По вопросам и предложениям</p>
            <a href="mailto:pionerrr@sila.ru">pionerrr@sila.ru</a>
          </div>
          <div>
            <p>Для консультаций</p>
            <a href="tel:+7(495)4562421">+7 (495) 456-24-21</a>
          </div>
        </div>
      </div>
      
      <hr />

      <ul className="nav__links">
        <li><button>Главная</button></li>
        <ScrollIntoView selector='.section-about'><li><button>О предприятии</button></li></ScrollIntoView>
        <ScrollIntoView selector='.section-news'><li><button>Новости</button></li></ScrollIntoView>
        <ScrollIntoView selector='.section-product'><li><button>Продукция</button></li></ScrollIntoView>
        <li><button>Услуги</button></li>
        <li><button>Поддержка</button></li>
        <li><button>География поставок</button></li>
        <li><button onClick={() => setVisible(true)}>Контакты</button></li>
      </ul>
    </nav>
  )
}
