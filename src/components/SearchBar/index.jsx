import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/system'

function Adornment({ onClick }) {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={onClick}
        edge="end"
      >
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  )
}

Adornment.propTypes = {
  onClick: PropTypes.func.isRequired,
}

function SearchBar({ setData, value, name }) {
  const onSearchClicked = () => {
    // TODO: Implement onSearch
  }

  const onChangeInput = (event) => {
    const {
      target: { value: inputValue },
    } = event

    if (inputValue.match(/^[A-Za-z0-9]+$/) || inputValue === '') {
      setData((prevData) => ({
        ...prevData,
        [name]: inputValue,
      }))
    }
  }

  return (
    <>
      <Box>
        <Typography variant="h4">Visita al inmueble</Typography>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="search-property">Codigo</InputLabel>
          <OutlinedInput
            sx={{ width: '100%' }}
            id="search-property"
            type="text"
            endAdornment={Adornment({ onClick: onSearchClicked })}
            onChange={onChangeInput}
            label="Password"
            value={value}
            name={name}
          />
        </FormControl>
      </Box>
    </>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  name: PropTypes.string,
}

SearchBar.defaultProps = {
  name: '',
}

export default SearchBar
