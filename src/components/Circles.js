import React from 'react'

const width = window.innerWidth
const height = window.innerHeight
const radius = (i) => Math.hypot(width, height) + ((i % 2)? 0 : 50)
const id = (x, y, i, color) => i + 'wave' + x + color + y

const circles = (colors, x, y, r, n = colors.length) => colors.map((color, i) => 
  <circle
    cx={x}
    cy={y}
    r={200}
    fill={(i == 0)?  `url(#${id(x, y, i, color)})` : 'rgba(0,0,0,0)'}
    key={x/y + i + color}
  />
)

export default circles
