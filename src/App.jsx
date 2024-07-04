import { useState } from 'react'
import Card from './myComponents/Card.jsx'
import './App.css'
import movies from './myComponents/Data.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {movies.map((movie, index) => (
        <Card
          key={index}
          bgImg={movie.bgImg}
          movieImg={movie.movieImg}
          name={movie.name}
          year={movie.year}
          actor={movie.actor}
          duration={movie.duration}
          type={movie.type}
          about={movie.about}
        />
      ))}
    </>
  )
}

export default App
