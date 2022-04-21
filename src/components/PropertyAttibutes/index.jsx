import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

function PropertyAttributes({
  attributes: {
    rent,
    furnished,
    whiteLine,
    sale,
    management,
  }, onChange,
}) {
  return (
    <FormGroup sx={{ display: 'flex', justifyContent: 'space-around' }} row>
      <FormControlLabel
        label="Alquiler"
        control={(
          <Checkbox
            name="rent"
            checked={rent}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Amueblado"
        control={(
          <Checkbox
            name="furnished"
            checked={furnished}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Linea blanca"
        control={(
          <Checkbox
            name="whiteLine"
            checked={whiteLine}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Venta"
        control={(
          <Checkbox
            name="sale"
            checked={sale}
            onChange={onChange}
          />
        )}
      />

      <FormControlLabel
        label="Administración"
        control={(
          <Checkbox
            name="management"
            checked={management}
            onChange={onChange}
          />
        )}
      />
    </FormGroup>
  )
}

PropertyAttributes.propTypes = {
  attributes: PropTypes.shape({
    rent: PropTypes.bool.isRequired,
    furnished: PropTypes.bool.isRequired,
    whiteLine: PropTypes.bool.isRequired,
    sale: PropTypes.bool.isRequired,
    management: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PropertyAttributes
