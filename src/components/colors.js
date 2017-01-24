const blueColors = [
  'aqua',
  'mediumturquoise',
  'cyan',
  'teal',
  'darkseagreen',
]
const yellowColors = [
  'lightyellow',
  'yellow',
  'greenyellow',
  'gold',
  'orange',
]
const rndIndex = () => Math.round(Math.random()*4)

export default (n) => [...Array(n)].map((_, i) =>
  (i % 2)?  yellowColors[rndIndex()] : blueColors[rndIndex()]
)


