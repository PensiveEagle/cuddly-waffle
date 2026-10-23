import { Box, Grid } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid size={5}>
          <Box>
            <h1>Form here... Some test text</h1>
          </Box>
        </Grid>
        <Grid size={7}>
          <Box>
            <h1>Suggestions here...</h1>
          </Box>
        </Grid>
      </Grid>
    </main>
  )
}
