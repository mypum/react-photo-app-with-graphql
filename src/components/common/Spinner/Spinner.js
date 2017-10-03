import React from 'react'
import {color} from 'utils/style/_config'

function Spinner () {
  return (
    <div>
      <div className="spinner">
        <div className="cube1" />
        <div className="cube2" />
      </div>
      <style jsx>{`
      .spinner {
        margin: 100px auto;
        width: 40px;
        height: 40px;
        position: relative;
      }

      .cube1, .cube2 {
        background-color: ${color.primary};
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-cubemove 1.8s infinite ease-in-out;
      }

      .cube2 {
        animation-delay: -0.9s;
      }

      @keyframes sk-cubemove {
        25% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
        } 50% {
          transform: translateX(42px) translateY(42px) rotate(-179deg);
        } 50.1% {
          transform: translateX(42px) translateY(42px) rotate(-180deg);
        } 75% {
          transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        } 100% {
          transform: rotate(-360deg);
        }
      }
      `}</style>
    </div>
  )
}

export default Spinner
