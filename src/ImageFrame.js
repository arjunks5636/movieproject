import React from "react"
import background from './movie.jpeg';

const ImageFrame = () => {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: '100%',
      width: '100%',
      backgroundPosition: 'center'
    }}>
    </div>
  )
}

export default ImageFrame