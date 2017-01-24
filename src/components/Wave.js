import React from 'react'

const offset = (i, n) => (i*2 > n)? -.2 : 0
const opacity = (i, n) => (i == n)? 0 : .4

const Wave = ({colors, id, duration, delay, n = colors.length}) => (
  <radialGradient id={id}>
    {colors.map((color, i) =>
      <stop
        offset="0%"
        stopColor={color}
        stopOpacity={opacity(i, n)}
        key={id + color + i}
      >
        <animate
          attributeName="offset"
          values="0;1;0"
          begin={i * delay + 's'}
          dur={duration + 's'}
          repeatCount="10"
        />
        <animate
          attributeName="stopOpacity"
          values="0;1"
          begin="0s"
          dur={duration + 's'}
          repeatCount="10"
        />
      </stop>
     )}
  </radialGradient>
)

export default Wave
