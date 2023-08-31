import Image from 'next/image'
import errorGif from '../public/error.gif'

const ErrorMessage = () => {
  return (
    <Image
      src={errorGif}
      alt="gif"
      width={155}
      height={160}
      style={{
        margin: '0 auto',
        display: 'block',
      }}
    />
  )
}

export default ErrorMessage
