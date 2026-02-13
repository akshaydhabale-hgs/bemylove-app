import { useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import './Proposal.css'

function Proposal({ name, sender, restrictNo }) {
  const [status, setStatus] = useState('asking') // asking, accepted, rejected
  const noBtnRef = useRef(null)

  const handleYes = () => {
    setStatus('accepted')
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleNo = () => {
    if (!restrictNo) {
      setStatus('rejected')
    }
  }

  const handleNoHover = () => {
    if (restrictNo && noBtnRef.current) {
      const btn = noBtnRef.current
      const maxX = window.innerWidth - btn.offsetWidth - 20
      const maxY = window.innerHeight - btn.offsetHeight - 20
      
      const x = Math.max(0, Math.random() * maxX)
      const y = Math.max(0, Math.random() * maxY)
      
      btn.style.position = 'fixed'
      btn.style.left = x + 'px'
      btn.style.top = y + 'px'
      btn.style.transition = 'none'
    }
  }

  if (status === 'accepted') {
    return (
      <div className="proposal-container celebration">
        <div className="celebration-content">
          <h1 className="yay-title">🎉 YAY!!! 🎉</h1>
          <p className="celebration-text">Best decision ever!</p>
          <div className="gif-container">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnd4MjY5ZXd4MjY5ZXd4MjY5ZXd4/UO5elnTqo4vSg/giphy.gif" 
              alt="Celebration"
              className="celebration-gif"
            />
          </div>
          <h2 className="love-message">I love you! ❤️</h2>
          {sender && <p className="sender-name">- {sender}</p>}
        </div>
      </div>
    )
  }

  if (status === 'rejected') {
    return (
      <div className="proposal-container sad">
        <h1 className="sad-title">Oh no... 💔</h1>
        <p className="sad-text">My heart is breaking...</p>
        <div className="gif-container">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY5MGY0YzU0Y2Y0Y2Y0Y2Y0Y2Y0Y2Y0Y2Y0Y2Y0Y2Y0JmVwPXYxX2ludGVybmFsX2dpZl9ieV9iZCZjdD1n/9Y5BbDSkSTiY8/giphy.gif" 
            alt="Sad"
            className="sad-gif"
          />
        </div>
        <button 
          className="btn btn-retry"
          onClick={() => window.location.reload()}
        >
          Try Again? 🥺
        </button>
      </div>
    )
  }

  return (
    <div className="proposal-container">
      <div className="proposal-card">
        <h1 className="proposal-question">
          {name}, will you be my Valentine? ❤️
        </h1>
        <div className="button-container">
          <button 
            className="btn btn-yes"
            onClick={handleYes}
          >
            Yes 💕
          </button>
          <button 
            ref={noBtnRef}
            className="btn btn-no"
            onClick={handleNo}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
          >
            No
          </button>
        </div>
        {sender && <p className="from-text">From: {sender} 💌</p>}
      </div>
    </div>
  )
}

export default Proposal
