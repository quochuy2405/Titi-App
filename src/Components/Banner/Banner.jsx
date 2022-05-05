import React from 'react'
import { ImageBanner } from '../../../public'
import Styles from './Banner.module.scss'
export default function Banner() {
  return (
    <div className={Styles.imageBanner}>
      <img src={ImageBanner} alt="Banner" />
    </div>
  )
}
