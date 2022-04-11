import { collection, getDocs } from 'firebase/firestore/lite'
import React from 'react'
import {
  Box,
  Container,
  FormGroup, TextField,
} from '@mui/material'
import getDatabase from '../../db'
import ActionButtonsFooter from '../ActionButtonsFooter'
import PropertyElements from '../PropertyElements'
import PropertyAttributes from '../PropertyAttibutes'
import SearchBar from '../SearchBar'

function PropertyVisitForm() {
  const handleOnSave = async () => {
    const db = getDatabase()
    const properties = collection(db, 'properties')
    const docsSnap = await getDocs(properties)
    const data = docsSnap.docs.map((doc) => doc.data())
    console.log({ data })
  }

  return (
    <Container className="App">
      <SearchBar />
      <PropertyAttributes />

      <Box>
        <FormGroup>
          <TextField id="outlined-basic" label="Propietario" variant="standard" />
          <TextField id="outlined-basic" label="Telefono" variant="standard" />
          <TextField type="email" id="outlined-basic" label="Correo" variant="standard" required />
          <TextField id="outlined-basic" label="Dirección" variant="standard" required />
          <TextField id="outlined-basic" label="No." variant="standard" required />
          <TextField id="outlined-basic" label="Sector/Ciudad" variant="standard" required />
          <PropertyElements />
          <TextField id="outlined-basic" label="Asesor captador" variant="standard" />
          <TextField id="outlined-basic" label="Colega inmoviliario" variant="standard" required />
        </FormGroup>
      </Box>

      <ActionButtonsFooter
        onSave={handleOnSave}
      />
    </Container>
  )
}

export default PropertyVisitForm
