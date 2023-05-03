import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
