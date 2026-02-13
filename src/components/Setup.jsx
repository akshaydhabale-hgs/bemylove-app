import { useState } from 'react'
import './Setup.css'

function Setup() {
  const [valentineName, setValentineName] = useState('')
  const [senderName, setSenderName] = useState('')
  const [unclickableNo, setUnclickableNo] = useState(false)
  const [resultLink, setResultLink] = useState('')

  const generateLink = () => {
    if (!valentineName || !senderName) {
      alert('Please enter both names first!')
      return
    }

    const baseUrl = window.location.origin + window.location.pathname
    const finalUrl = `${baseUrl}?name=${encodeURIComponent(valentineName)}&sender=${encodeURIComponent(senderName)}&no=${unclickableNo}`
    setResultLink(finalUrl)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resultLink)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="setup-container">
      <div className="setup-card">
        <h1>💕 Create a Proposal</h1>
        <p className="subtitle">Create a special link to ask someone to be your Valentine!</p>

        <div className="form-group">
          <label htmlFor="valentineName">Their Name:</label>
          <input
            type="text"
            id="valentineName"
            value={valentineName}
            onChange={(e) => setValentineName(e.target.value)}
            placeholder="Enter their name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="senderName">Your Name:</label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Enter your name..."
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={unclickableNo}
              onChange={(e) => setUnclickableNo(e.target.checked)}
            />
            <span>Make 'No' unclickable? 😈</span>
          </label>
        </div>

        <button className="btn btn-primary" onClick={generateLink}>
          Generate Link 🔗
        </button>

        {resultLink && (
          <div className="result-box">
            <p className="result-label">Copy & send this:</p>
            <div className="result-link">
              <a href={resultLink} target="_blank" rel="noopener noreferrer">
                {resultLink}
              </a>
            </div>
            <button className="btn btn-copy" onClick={copyToClipboard}>
              📋 Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Setup
