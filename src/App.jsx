import data from '../data.js'
import Card from './components/Card'
import './App.css'


function App() {
  return (
  <div className='card-container'>
  <title>From Us to You</title>
    {data.map((d) => (
      <Card 
        key={d.id}
        front={d.front}
        back={d.back}
      />
    ))}
  </div>
)}

export default App
