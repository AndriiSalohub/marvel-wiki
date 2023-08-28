import { FC } from 'react'
import '../styles/RandomChar.scss'
import Image from 'next/image'

const RandomChar: FC = () => {
  return (
    <>
      <div className="random-char">
        <div className="random-char__info">
          <img
            src="https://i.ibb.co/31M4WGS/Thumbnail.png"
            alt="character-image"
          />
          <div className="random-char__info__container">
            <h3 className="random-char__info__name">THORE</h3>
            <p className="random-char__info__description">
              As the Norse God of thunder and lightning, Thor wields one of the
              greatest weapons ever made, the enchanted hammer Mjolnir. While
              others have described Thor as an over-muscled, oafish imbecile,
              he's quite smart and compassionate...
            </p>
            <button className="random-char__info__button random-char__info__button-homepage random-char__button">
              HOMEPAGE
            </button>
            <button className="random-char__info__button random-char__info__button-wiki random-char__button">
              WIKI
            </button>
          </div>
        </div>
        <div className="random-char__banner">
          <h3 className="random-char__banner__title">
            Random character for today!{' '}
            <span>Do you want to get to know him better?</span>
          </h3>
          <h4 className="random-char__banner__subtitle">
            Or choose another one
          </h4>
          <button className="random-char__banner__button random-char__button random-char__button-red">
            TRY IT
          </button>
        </div>
      </div>
    </>
  )
}

export default RandomChar
