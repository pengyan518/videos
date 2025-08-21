import React from 'react'
import config from '../../config'
import { MySvgProps } from '../../types'

const InstagramIcon: React.FC<MySvgProps> = ({size = 32, width = size, height = size, ...props}) => (
  <svg xmlns={config.xlmns} fill="currentColor" {...props} width={width} height={height} viewBox="0 0 256 256" xmlSpace="preserve">
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(217,48,143)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 70 55.399 C 70 63.463 63.463 70 55.399 70 H 34.601 C 26.537 70 20 63.463 20 55.399 V 34.601 C 20 26.537 26.537 20 34.601 20 h 20.798 C 63.463 20 70 26.537 70 34.601 V 55.399 z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(255,255,255)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <circle
        cx="45.150999999999996"
        cy="45.150999999999996"
        r="13.081"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(217,48,143)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="  matrix(1 0 0 1 0 0) "
      />
      <circle
        cx="60.980000000000004"
        cy="29.32"
        r="2.95"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(217,48,143)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
      />
    </g>
  </svg>
)

export default InstagramIcon
