import React from 'react'
import { Html } from '@react-three/drei'
const Map = () => {
  return (
        <Html
        as='div'
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.714087111454!2d80.24017307485468!3d12.990129987326965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526787f95d413d%3A0x3af382f9e2662992!2sBeebox%20Studios%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1693447555794!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Html>
  )
}

export default Map