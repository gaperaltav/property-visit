import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'

function ActionButtonsFooter({ onSave, OnCancel }) {
  return (
    <Box xs={{
      padding: '10px',
    }}
    >
      <Button variant="contained" endIcon={<SendIcon />}> Cancelar </Button>
      <Button variant="contained" endIcon={<SaveIcon />}> Guardar </Button>
    </Box>
  )
}

export default ActionButtonsFooter
