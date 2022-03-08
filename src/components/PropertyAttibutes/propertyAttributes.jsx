import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

function PropertyAttibutes() {
  return (
    <FormGroup row>
      <FormControlLabel
        label="Label"
        control={<Checkbox defaultChecked />}
      />
      <FormControlLabel
        label="Disabled"
        control={<Checkbox />}
      />
    </FormGroup>
  )
}

export default PropertyAttibutes
