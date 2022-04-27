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
  const [loading, setLoading] = useState(false)

  const handleOnSave = async () => {
    setLoading(true)
    const db = getDatabase()
    await setDoc(doc(db, 'properties', formData.code), formData)
    setFormData({ ...initialFormData })
    setLoading(false)
  }

  const setUpdateFormData = (event) => {
    const { target: { value, name } } = event
    if (!name) {
      return
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
        name="code"
        onChangeValue={setUpdateFormData}
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
            name="owner"
            value={formData.owner}
            onChange={setUpdateFormData}
          />

          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="standard"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={setUpdateFormData}
          />

          <TextField
            type="email"
            id="outlined-basic"
            label="Correo"
            variant="standard"
            value={formData.email}
            name="email"
            onChange={setUpdateFormData}
          />

          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="standard"
            value={formData.address}
            name="address"
            onChange={setUpdateFormData}
          />

          <TextField
            id="outlined-basic"
            label="No."
            variant="standard"
            value={formData.number}
            name="number"
            onChange={setUpdateFormData}
          />

          <TextField
            id="outlined-basic"
            label="Sector/Ciudad"
            variant="standard"
            value={formData.city}
            name="city"
            onChange={setUpdateFormData}
          />

          <PropertyElements
            elements={formData.elements}
            onChange={onChangeElements}
          />

          <TextField
            id="outlined-basic"
            label="Asesor captador"
            variant="standard"
            value={formData.adviser}
            name="adviser"
            onChange={setUpdateFormData}
          />

          <TextField
            id="outlined-basic"
            label="Colega inmoviliario"
            variant="standard"
            value={formData.colleague}
            name="colleague"
            onChange={setUpdateFormData}
          />
        </FormGroup>
      </Box>

      <ActionButtonsFooter
        isLoading={loading}
        onSave={handleOnSave}
      />
    </Container>
  )
}

export default PropertyVisitForm
