import React from 'react'

const offset = (i) => (i % 2)? -70 : 50
const circles = (colors = [], x, y, r) => colors.map((color, i) => 
  <circle
    cx={x}
    cy={y}
    r={r + offset(i) }
    fill={`url(#${i + 'wave' + x + color + y})`}
    key={x/y + i + color}
  />
)

export default circles
