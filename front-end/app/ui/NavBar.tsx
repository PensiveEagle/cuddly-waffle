import { Box, Grid, Typography } from "@mui/material";

export default function NavBar() {
    return (
        <Box component="section" className="sticky top-0 bg-primary z-9999">
            <Grid container spacing={2} columns={36}>
                <Grid size={2}>
                    <Box component="img" src="cuddly-waffle.svg" alt="Cuddly Waffle Logo" className="h-full w-full p-3"/>
                </Grid>
                <Grid size={34} className="content-center">
                    <Typography variant="h4" className="inline-block text-white align-middle">Cuddly Waffle - Suggestions Board</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}