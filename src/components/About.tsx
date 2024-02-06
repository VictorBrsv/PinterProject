import React from 'react'
import { Link } from 'react-router-dom'

function About(): JSX.Element {
  return (
    <div className="App">
     <h4>Our Data Base</h4>
     <a className='button' href="https://drawsql.app/teams/pansernort/diagrams/pinterproject" target='_blank' rel='noreferrer' style={{ marginRight: '10px' }}>
      Link to DataBase
     </a>
     <Link className='button' to='/'>Home</Link>
    </div>
    
  )
}

export default About