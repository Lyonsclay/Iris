import React from 'react'

const width = window.innerWidth
const id = (x, y, i, color) => i + 'wave' + x + color + y
const radius = (width > 500)? 200 : 100
const offset = i => (i % 2)? 0 : 10

const circles = (colors, x, y, r, n = colors.length) => colors.map((color, i) => 
  <circle
    cx={x}
    cy={y}
    r={radius + offset(i)}
    fill={(i === 0)?  `url(#${id(x, y, i, color)})` : 'rgba(0,0,0,0)'}
    key={x/y + i + color}
  />
)

export default circles
