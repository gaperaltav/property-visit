import React from 'react'
import { FormGroup, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import PropertyElements from '../PropertyElements'

function PropertyVisitFields({
  data: {
    owner, phoneNumber, email, address, number, city, adviser, colleague,
  }, elements, setUpdateFormData, setChangeElements,
}) {
  return (
    <Box>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Propietario"
          variant="standard"
          name="owner"
          value={owner}
          onChange={setUpdateFormData}
        />

        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="standard"
          name="phoneNumber"
          value={phoneNumber}
          onChange={setUpdateFormData}
        />

        <TextField
          type="email"
          id="outlined-basic"
          label="Correo"
          variant="standard"
          value={email}
          name="email"
          onChange={setUpdateFormData}
        />

        <TextField
          id="outlined-basic"
          label="Dirección"
          variant="standard"
          value={address}
          name="address"
          onChange={setUpdateFormData}
        />

        <TextField
          id="outlined-basic"
          label="No."
          variant="standard"
          value={number}
          name="number"
          onChange={setUpdateFormData}
        />

        <TextField
          id="outlined-basic"
          label="Sector/Ciudad"
          variant="standard"
          value={city}
          name="city"
          onChange={setUpdateFormData}
        />

        <PropertyElements
          elements={elements}
          onChange={setChangeElements}
        />

        <TextField
          id="outlined-basic"
          label="Asesor captador"
          variant="standard"
          value={adviser}
          name="adviser"
          onChange={setUpdateFormData}
        />

        <TextField
          id="outlined-basic"
          label="Colega inmoviliario"
          variant="standard"
          value={colleague}
          name="colleague"
          onChange={setUpdateFormData}
        />
      </FormGroup>
    </Box>
  )
}

PropertyVisitFields.propTypes = {
  data: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    adviser: PropTypes.string.isRequired,
    colleague: PropTypes.string.isRequired,
  }).isRequired,
  elements: PropTypes.shape({
    sign: PropTypes.bool.isRequired,
    keys: PropTypes.bool.isRequired,
    occupy: PropTypes.bool.isRequired,
    vigilant: PropTypes.bool.isRequired,
  }).isRequired,
  setUpdateFormData: PropTypes.func.isRequired,
  setChangeElements: PropTypes.func.isRequired,
}

export default PropertyVisitFields
