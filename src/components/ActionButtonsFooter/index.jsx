import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'

function ActionButtonsFooter({ onSave, onCancel }) {
  return (
    <Box
      style={{
        padding: '10px',
        marginTop: ' 10px',
      }}
    >
      <Button variant="contained" endIcon={<SendIcon />} onClick={onCancel}>
        Cancelar
      </Button>
      <Button variant="contained" endIcon={<SaveIcon />} onClick={onSave}>
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
