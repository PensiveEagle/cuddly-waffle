import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#008674' }}>
        <Toolbar>
          <Image src="/cuddly-waffle.svg" alt="App logo" width={100} height={100}></Image>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Cuddly Waffle - Suggestions Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function Footer() {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <h1>Cuddly Waffle</h1>
            </Box>
        </div>
    )
}