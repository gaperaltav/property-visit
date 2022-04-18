import { setDoc, doc } from 'firebase/firestore/lite'
import React, { useState } from 'react'
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

const initialFormData = {
  code: '',
  owner: '',
  phoneNumber: '',
  email: '',
}

function PropertyVisitForm() {
  const [formData, setFormData] = useState(() => initialFormData)

  const handleOnSave = async () => {
    const db = getDatabase()
    await setDoc(doc(db, 'properties', formData.code), formData)
  }

  const setUpdateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  console.log({ formData })

  return (
    <Container className="App">
      <SearchBar
        value={formData.code}
        setValue={(value) => setUpdateFormData('code', value)}
      />

      <PropertyAttributes />

      <Box>
        <FormGroup>
          <TextField
            id="outlined-basic"
            label="Propietario"
            variant="standard"
            onChange={(e) => setUpdateFormData('owner', e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="standard"
            onChange={(e) => setUpdateFormData('phoneNumer', e.target.value)}
          />

          <TextField
            type="email"
            id="outlined-basic"
            label="Correo"
            variant="standard"
            onChange={(e) => setUpdateFormData('email', e.target.value)}
          />

          <TextField id="outlined-basic" label="Dirección" variant="standard" />
          <TextField id="outlined-basic" label="No." variant="standard" />
          <TextField id="outlined-basic" label="Sector/Ciudad" variant="standard" />
          <PropertyElements />
          <TextField id="outlined-basic" label="Asesor captador" variant="standard" />
          <TextField id="outlined-basic" label="Colega inmoviliario" variant="standard" />
        </FormGroup>
      </Box>

      <ActionButtonsFooter
        onSave={handleOnSave}
      />
    </Container>
  )
}

export default PropertyVisitForm
