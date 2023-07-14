import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
    
  return (
    <div className="card" onClick= {() => navigate('/letter')} >
            <h2>Uma coisa que eu amo em voce é...</h2>
    </div>
  )
}

export default Home