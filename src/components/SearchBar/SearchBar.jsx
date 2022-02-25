import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  IconButton, InputAdornment, InputLabel, OutlinedInput, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';

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
  );
}

Adornment.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function SearchBar() {
  const [value, setValue] = useState('');

  const onCodeChanged = ({ target }) => {
    setValue(target.value);
  };

  const onSearchClicked = () => {
    console.log('search Clicked');
  };

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
            onChange={onCodeChanged}
            label="Password"
            value={value}
          />
        </FormControl>
      </Box>
    </>
  );
}

export default SearchBar;
