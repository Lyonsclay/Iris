import React, { Component } from 'react'
import Ripples from './Ripples'
import circles from './Circles'
import colorSet from '../utils/colorSet'

const width = window.innerWidth
const height = window.innerHeight

export default class Game extends Component {
  constructor() {
    super()

    var context
    var AudioContext

    if (AudioContext) {
      context = new AudioContext()
    } else {
      context = new window.webkitAudioContext()
    }

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
    const colors = colorSet(17)
    const x = e.clientX
    const y = e.clientY

    this.setState({
      ripples: [
        <Ripples
          colors={colors}
          x={x}
          y={y}
          key={x + colors[0] + y}
        />,
        ...this.state.ripples.slice(0, 40),
      ]
    })
  }

  render() {
    const colors = colorSet(4)
    const x = width/2
    const y = height/2

    return (
      <div>
        <svg
          onClick={this.handleClick.bind(this)}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}>
          <filter id="spotlight">
            <feBlend in="SourceGraphic" in2="SourceGraphic" mode="multiply"/>
          </filter>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
          </filter>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(240, 230, 80, 0.4)" filter="url(#spotlight)" />
          {this.state.ripples}
        </svg >
        {/* <audio controls autoPlay>
            <source src="../../public/music.wav" />
            </audio> */}
      </div>
    )
  }
}
