import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './CategoryItems.module.scss'

const listCategory = [
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
  {
    name: 'Điện tử',
    link: '/',
  },
]
export default function CategoryItems() {
  return (
    <div>
      <ul className={Styles.listCagerory}>
        {listCategory.map((item) => (
          <li key={item.name} className={Styles.itemCategory}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
