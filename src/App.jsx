import data from '../data.js'
import Card from './components/Card'
import './App.css'

function App() {
  return (
  <div class='container'>
  <title>4 col 2 row</title>
    {data.map((d) => (
      <Card 
        key={d.id}
        name={d.name}
        text={d.text}
        image={d.image}
      />
    ))}
  </div>
)}

export default App
