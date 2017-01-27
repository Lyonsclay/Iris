import React from 'react'

const offset = (i, n) => (i*2 > n)? -.2 : 0
// Setting last color cirlce to 0 prevents static circle.
const opacity = (i, n) => (i == n - 1)? 0 : .2
const sequence = [...new Array(10)].map((_, i) => i * 0.04)
const opacityValues = sequence.concat(sequence.reverse()).join(';')
const animateValues = (i) => (i == 0)? '' : '0;0.9;0'
const colorSpread = (colors) => colors.join(';')

const Wave = ({colors, id, duration, delay, n = colors.length}) => (
  <g>
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
            values={animateValues(i)}
            begin={i + 's'}
            dur={duration + 's'}
            repeatCount="indefinite"
          />
        </stop>
       )}
    </radialGradient>
    <radialGradient id="ring">
      <stop
        offset="0%"
        stopColor="white"
        stopOpacity="0.1"
      >
        <animate
          attributeName="stop-color"
          values={colorSpread(colors)}
          begin="0"
          dur={50}
          repeatCount="indefinite"
        />
      </stop>
      <stop
        offset="95%"
        stopColor="rgba(240, 230, 80, 1)"
      />
      <stop
        offset="100%"
        stopColor="rgb(240, 230, 80)"
        stopOpacity="0.3"
      />
    </radialGradient>
  </g>
)

export default Wave
