import React from 'react'

const offset = (i, n) => (i*2 > n)? -.2 : 0

const Wave = ({colors = [], id, duration, delay}) => (
  <radialGradient id={id}>
    {colors.map((color, i) =>
      <stop
        offset="0%"
        stopColor={color}
        stopOpacity={.3 + offset(i, colors.length)}
        key={id + color + i}
      >
        <animate
          attributeName="offset"
          values="0;1;0"
          begin={i * delay + i + 's'}
          dur={duration + 's'}
          repeatCount="indefinite"
        />
      </stop>
     )}
  </radialGradient>
)

export default Wave
