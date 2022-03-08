import { Container } from '@mui/material'
import React from 'react'
import PropertyAttibutes from './components/PropertyAttibutes/propertyAttributes'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <Container className="App">
      <SearchBar />
      <PropertyAttibutes />
    </Container>
  )
}

export default App
