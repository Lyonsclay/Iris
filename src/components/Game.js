import React, { Component } from 'react'
import Ripples from './Ripples'
import circles from './Circles'
import colorSet from './colors'

const width = window.innerWidth
const height = window.innerHeight

export default class Game extends Component {
  constructor() {
    super()

    var context = new AudioContext()

    this.state = {
      ripples: [],
      context,
    }
  }

  onDecoded(buffer) {
    var context = this.state.context
    var bufferSource = context.createBufferSource()
    bufferSource.buffer = bufferSource
    bufferSource.connect(context.destination)
    this.setState({ bufferSource })
  }

  handleClick(e) {
    const colors = colorSet(6)
    const x = e.clientX
    const y = e.clientY

    this.setState({
      ripples: [
        <Ripples
          colors={colors}
          x={x}
          y={y}
          key={new Date().getMilliseconds()}
        />,
        ...this.state.ripples.slice(0, 9),
      ]
    })
  }

  render() {
    const colors = colorSet(6)
    const x = width/2
    const y = height/2

    return (

      <svg onClick={this.handleClick.bind(this)} width="100%" height="100%" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(122, 200, 170, .9)',
      }}>
        <audio controls autoPlay> 
          <source src="../../public/music.wav" />
        </audio>
        {this.state.ripples}
      </svg >
    )
  }
}
