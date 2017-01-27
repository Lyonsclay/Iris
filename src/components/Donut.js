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
m0,${inRadius + width}\
a${inRadius},${inRadius},0,1,1,${0},-${inRadius}\
a${inRadius},${inRadius},0,0,1,${0},${inRadius}\
Z\
`

var dad = "M100,0a100,100,0,1,0,100,100A100,100,0,0,0,100,0Zm0,160a40,40,0,1,1,40,-40A40,40,0,0,1,100,160Z"

console.log('analysis has dreams', dad === path(100, 40))
console.log(dad)
console.log(path(100, 40))
export default ({outRadius, x, y, width = 40}) => (
  <g>
    <text x="400" y="100">{outRadius}</text>
    <path d={path(outRadius, width)} fill="rgba(40, 30, 80, 1)" />
    <circle cx={0} cy={outRadius - width} r="20" fill="white"/>
  </g>
)

