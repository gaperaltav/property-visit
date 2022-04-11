import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

function PropertyAttributes() {
  return (
    <FormGroup sx={{ display: 'flex', justifyContent: 'space-around' }} row>
      <FormControlLabel label="Alquiler" control={<Checkbox />} />
      <FormControlLabel label="Amueblado" control={<Checkbox />} />
      <FormControlLabel label="Linea blanca" control={<Checkbox />} />
      <FormControlLabel label="Venta" control={<Checkbox />} />
      <FormControlLabel label="Administración" control={<Checkbox />} />
    </FormGroup>
  )
}

export default PropertyAttributes
