import React, { Component, Dimensions } from 'react'

const width = window.innerWidth
const height = window.innerHeight
export default class test extends Component {
  render() {
    return(
      <svg width="100%" height="100%" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'yellow',
      }}>
        <defs>
          <radialGradient id="plus">
            <stop offset="0%" stopColor="green" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="0s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="1s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="2s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="3s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="4s" dur="10s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          <radialGradient id="minus">
            <stop offset="0%" stopColor="green" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="1s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".4">
              <animate attmeaributeName="offset" values="0;1;0" begin="2s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="3s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="4s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="5s" dur="10s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          <radialGradient id="equal">
            <stop offset="0%" stopColor="green" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="2s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="3s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="4s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="5s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="6s" dur="10s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          <radialGradient id="multiply">
            <stop offset="0%" stopColor="green" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="3s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".4">
              <animate attributeName="offset" values="0;1;0" begin="4s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="5s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="cyan" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="6s" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="0%" stopColor="gold" stopOpacity=".2">
              <animate attributeName="offset" values="0;1;0" begin="7s" dur="10s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
        </defs>
        <circle cx={width/2} cy={height/2} r={height + 50} fill="url(#plus)"/>
        <circle cx={width/2} cy={height/2} r={height - 50} fill="url(#minus)"/>
        <circle cx={width/2} cy={height/2} r={height + 50} fill="url(#equal)"/>
        <circle cx={width/2} cy={height/2} r={height - 50} fill="url(#multiply)"/>
      </svg>
    )
  }
}
