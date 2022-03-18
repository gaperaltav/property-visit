/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Container, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ActionButtonsFooter from './components/ActionButtonsFooter/ActionButtonsFooter'
import PropertyAttibutes from './components/PropertyAttibutes/propertyAttributes'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <Container className="App">
      <SearchBar />
      <PropertyAttibutes />
      <Box>
        <TextField id="outlined-basic" label="Propietario" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Correo" variant="outlined" />
      </Box>
      <ActionButtonsFooter />
    </Container>
  )
}

export default App
