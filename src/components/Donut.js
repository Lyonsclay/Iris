import React from 'react'
import { Motion, spring } from 'react-motion'

const path = (
  outRadius,
  width,
  inEnd = 2 * outRadius - width,
  inRadius = outRadius - width
) => `\
M${outRadius},0\
a${outRadius},${outRadius},0,1,0,${outRadius},${outRadius}\
A${outRadius},${outRadius},0,0,0,${outRadius},0\
Z\
m${0},${inEnd}\
a${inRadius},${inRadius},0,1,1,${0},-${2 * inRadius}\
a${inRadius},${inRadius},0,0,1,${0},${2 * inRadius}\
Z\
`

export default ({outRadius, x, y, colors, duration, width = 100}) => {

  return (
    <Motion
      defaultStyle={{opacity: 0}}
      style={{opacity: spring(1, { stiffness: 20, damping: 100})}}
    >
      {fill =>
        <path
          transform={`translate(${x},${y})`}
          d={path(outRadius, width)}
          fill="url(#ring)"
          stroke="rgba(220, 200, 18, 0.2)"
          strokeWidth="3"
          fillOpacity={fill.opacity}
        />
      }
    </Motion>
  )
}
