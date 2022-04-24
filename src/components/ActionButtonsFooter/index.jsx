import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import CancelIcon from '@mui/icons-material/Cancel'
import SaveIcon from '@mui/icons-material/Save'
import LoadingButton from '@mui/lab/LoadingButton'

function ActionButtonsFooter({ onSave, onCancel, isLoading }) {
  console.log({ isLoading })
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
      <LoadingButton
        variant="contained"
        endIcon={<SaveIcon />}
        onClick={onSave}
        size="large"
        loading={isLoading}
        loadingPosition="end"
      >
        Guardar
      </LoadingButton>
    </Box>
  )
}

ActionButtonsFooter.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
}

ActionButtonsFooter.defaultProps = {
  onSave: () => {},
  onCancel: () => {},
  isLoading: false,
}

export default ActionButtonsFooter
