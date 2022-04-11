import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const styles = {
  margin: '25px',
  display: 'flex',
  justifyContent: 'space-around',
  border: '1px solid',
}

function PropertyElements() {
  return (
    <FormGroup sx={styles} row>
      <FormControlLabel label="Letrero" control={<Checkbox />} />
      <FormControlLabel label="Llaves" control={<Checkbox />} />
      <FormControlLabel label="Habitado" control={<Checkbox />} />
      <FormControlLabel label="Vigilante" control={<Checkbox />} />
    </FormGroup>
  )
}

export default PropertyElements
