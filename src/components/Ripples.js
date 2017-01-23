import React from 'react'
import Wave from './Wave'
import circles from './Circles'

const height = window.innerHeight
const Ripples = ({colors, x, y}) => {
  return (
    <g>
    <defs>
    {colors.map((color, i) =>
      <Wave
        colors={colors}
        id={i + 'wave' + x + color + y}
        duration={6}
        delay={i * .2}
        key={i + color + y * x}
      />
    )}
      </defs>
      {circles(colors, x, y, 3 * x)}
    </g>
  )
}

export default Ripples
