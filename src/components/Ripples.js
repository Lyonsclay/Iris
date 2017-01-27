import React from 'react'
import Wave from './Wave'
import Donut from './Donut'
import circles from './Circles'

/* const height = window.innerHeight*/
const ring = 190 
const Ripples = ({colors, x, y}) => {
  return (
    <g>
      <defs>
        {colors.map((color, i) =>
          <Wave
            colors={colors}
            id={i + 'wave' + x + color + y}
            duration={10}
            delay={i * 1}
            key={i + color + y * x}
          />
         )}
      </defs>
      {circles(colors, x, y)}
      <Donut
        outRadius={ring}
        x={x - ring}
        y={y - ring}
      />
    </g>
  )
}

export default Ripples
