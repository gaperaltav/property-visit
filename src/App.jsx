/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Container, FormGroup, TextField } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect } from 'react'
import ActionButtonsFooter from './components/ActionButtonsFooter'
import PropertyAttibutes from './components/PropertyAttibutes'
import SearchBar from './components/SearchBar'
import getDatabase from './db'

function App() {
  const handleOnSave = async () => {
    const db = getDatabase()
    const properties = collection(db, 'properties')
    const docsSnap = await getDocs(properties)
    const data = docsSnap.docs.map((doc) => doc.data())
    console.log({ data })
  }

  useEffect(() => {})

  return (
    <Container className="App">
      <SearchBar />
      <PropertyAttibutes />
      <FormGroup>
        <TextField id="outlined-basic" label="Propietario" variant="standard" />
        <TextField id="outlined-basic" label="Telefono" variant="standard" />
        <TextField id="outlined-basic" label="Correo" variant="standard" />
      </FormGroup>
      <ActionButtonsFooter
        onSave={handleOnSave}
      />
    </Container>
  )
}

export default App
