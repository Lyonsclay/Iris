import React from 'react'

const offset = (i, n) => (i*2 > n)? -.2 : 0
const opacity = (i, n) => (i == n - 1)? 0 : .2
const sequence = [...new Array(10)].map((_, i) => i * 0.04)
const opacityValues = sequence.concat(sequence.reverse()).join(';')

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
          values="0;0.9;0"
          begin={i + 's'}
          dur={duration + 's'}
          repeatCount="indefinite"
        />
      </stop>
     )}
  </radialGradient>
)

export default Wave
