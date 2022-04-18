import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import CancelIcon from '@mui/icons-material/Cancel'
import SaveIcon from '@mui/icons-material/Save'

function ActionButtonsFooter({ onSave, onCancel }) {
  return (
    <Box
      style={{
        padding: '10px',
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Button
        variant="contained"
        endIcon={<CancelIcon />}
        size="large"
        onClick={onCancel}
        color="error"
      >
        Cancelar
      </Button>
      <Button
        variant="contained"
        endIcon={<SaveIcon />}
        onClick={onSave}
        size="large"
      >
        Guardar
      </Button>
    </Box>
  )
}

ActionButtonsFooter.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

ActionButtonsFooter.defaultProps = {
  onSave: () => {},
  onCancel: () => {},
}

export default ActionButtonsFooter
