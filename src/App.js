import './App.css'
import { Route, Routes } from 'react-router-dom'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
