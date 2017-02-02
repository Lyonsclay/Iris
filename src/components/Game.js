import React, { Component } from 'react'
import Ripples from './Ripples'
import colorSet from '../utils/colorSet'
import { TransitionMotion, spring } from 'react-motion'

const width = window.innerWidth
const height = window.innerHeight

export default class Game extends Component {
  constructor() {
    super()

    this.state = {
      ripples: [],
      enter: [{ key: '1', style: {opacity: 0.8}}],
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
      ],
      enter: [],
    })
  }

  willLeave() {
    return { opacity: spring(0, { stiffness: 35, damping: 10 }) }
  }

  render() {

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

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(240, 230, 80, 0.4)"
          />
          <TransitionMotion
            willLeave={this.willLeave}
            styles={this.state.enter}
          >
            {styles => (
               <g>
                 {styles.map(config => (
                    <text
                      key="1"
                      x={width/3}
                      y={height/2}
                      fontSize="32"
                      fill="gray"
                      style={{...config.style, fontStyle: 'Helvetica neue'}}
                    >
                      Click or Tap anywhere!
                    </text>
                  ))
                 }
               </g>
             )
            }
          </TransitionMotion>
          {this.state.ripples}
        </svg>
      </div>
    )
  }
}
