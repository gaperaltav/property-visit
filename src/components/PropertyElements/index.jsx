import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const styles = {
  margin: '25px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  border: '1px solid #ccc',
}

function PropertyElements({
  elements: {
    sign,
    keys,
    occupy,
    vigilant,
  },
  onChange,
}) {
  return (
    <FormGroup sx={styles} row>
      <FormControlLabel
        label="Letrero"
        control={(
          <Checkbox
            name="sign"
            checked={sign}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Llaves"
        control={(
          <Checkbox
            name="keys"
            checked={keys}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Habitado"
        control={(
          <Checkbox
            name="occupy"
            checked={occupy}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Vigilante"
        control={(
          <Checkbox
            name="vigilant"
            checked={vigilant}
            onChange={onChange}
          />
        )}
      />
    </FormGroup>
  )
}

PropertyElements.propTypes = {
  elements: PropTypes.shape({
    sign: PropTypes.bool.isRequired,
    keys: PropTypes.bool.isRequired,
    occupy: PropTypes.bool.isRequired,
    vigilant: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PropertyElements
