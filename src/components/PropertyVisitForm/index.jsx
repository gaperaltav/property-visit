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
  address: '',
  number: '',
  city: '',
  adviser: '',
  colleague: '',
  attributes: {
    rent: false,
    furnished: false,
    whiteLine: false,
    sale: false,
    management: false,
  },
  elements: {
    sign: false,
    keys: false,
    occupy: false,
    vigilant: false,
  },
}

function PropertyVisitForm() {
  const [formData, setFormData] = useState(() => initialFormData)

  const handleOnSave = async () => {
    const db = getDatabase()
    await setDoc(doc(db, 'properties', formData.code), formData)
    setFormData({ ...initialFormData })
  }

  const setUpdateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  const onChangeAttributes = (event) => {
    const attributeName = event.target.name
    if (!attributeName) return

    setFormData((prevData) => ({
      ...prevData,
      attributes: {
        ...prevData.attributes,
        [attributeName]: !prevData.attributes[attributeName],
      },
    }))
  }

  const onChangeElements = (event) => {
    const element = event.target.name
    if (!element) return

    setFormData((prevData) => ({
      ...prevData,
      elements: {
        ...prevData.elements,
        [element]: !prevData.elements[element],
      },
    }))
  }

  return (
    <Container className="App">
      <SearchBar
        value={formData.code}
        setValue={(value) => setUpdateFormData('code', value)}
      />

      <PropertyAttributes
        attributes={formData.attributes}
        onChange={onChangeAttributes}
      />

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
            onChange={(e) => setUpdateFormData('phoneNumber', e.target.value)}
          />

          <TextField
            type="email"
            id="outlined-basic"
            label="Correo"
            variant="standard"
            onChange={(e) => setUpdateFormData('email', e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="standard"
            onChange={(e) => setUpdateFormData('address', e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="No."
            variant="standard"
            onChange={(e) => setUpdateFormData('number', e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Sector/Ciudad"
            variant="standard"
            onChange={(e) => setUpdateFormData('city', e.target.value)}
          />

          <PropertyElements
            elements={formData.elements}
            onChange={onChangeElements}
          />

          <TextField
            id="outlined-basic"
            label="Asesor captador"
            variant="standard"
            onChange={(e) => setUpdateFormData('adviser', e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Colega inmoviliario"
            variant="standard"
            onChange={(e) => setUpdateFormData('colleague', e.target.value)}
          />
        </FormGroup>
      </Box>

      <ActionButtonsFooter
        onSave={handleOnSave}
      />
    </Container>
  )
}

export default PropertyVisitForm
