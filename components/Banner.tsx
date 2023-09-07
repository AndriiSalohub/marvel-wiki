import React, { FC } from 'react'
import Image from 'next/image'
import avangers from '@/public/images/avengers.png'
import avangersLogo from '@/public/images/avengers-logo.png'
import '@/styles/Banner.scss'

const Banner: FC = () => {
  return (
    <>
      <section className="banner">
        <Image src={avangers} alt="avangers" />
        <div className="banner__info">
          <h3 className="banner__info__title">New comics every week!</h3>
          <h3 className="banner__info__subtitle">Stay tuned!</h3>
        </div>
        <Image
          src={avangersLogo}
          alt="avangers-logo"
          className="banner__logo"
        />
      </section>
    </>
  )
}

export default Banner
