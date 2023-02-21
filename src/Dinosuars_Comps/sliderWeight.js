import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderWeight() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={49855}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10000}
        marks
        min={2}
        max={49855}
      />
    </Box>
  );
}