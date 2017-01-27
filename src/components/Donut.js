import React from 'react'

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

const colorSpread = (colors) => colors.join(';')

export default ({outRadius, x, y, colors, duration, width = 100}) => (
  <g>
    <path
      transform={`translate(${x},${y})`}
      d={path(outRadius, width)}
      fill="url(#ring)"
      stroke="rgba(220, 200, 18, 0.0)"
      strokeWidth="15"
    />
  </g>
)
