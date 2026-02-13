import Proposal from './components/Proposal'
import './App.css'

function App() {
  // Hardcoded values for direct deployment
  const proposalData = {
    name: 'Nameeta',
    sender: 'Akshay',
    restrictNo: true // Make the "No" button unclickable
  }

  return (
    <div className="app">
      <Proposal 
        name={proposalData.name}
        sender={proposalData.sender}
        restrictNo={proposalData.restrictNo}
      />
    </div>
  )
}

export default App
