import { Box, Grid } from '@mui/material';
import { Suspense } from 'react';
import SuggestionList from './ui/suggestion_list/SuggestionList';

export default function Home() {
    return (
        <main>
            <Grid container spacing={0} className="mx-20">
                <Grid size={5}>
                    <Box>
                        <h1>Form here...</h1>
                    </Box>
                </Grid>
                <Grid size={7}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <SuggestionList />
                    </Suspense>
                </Grid>
            </Grid>
        </main>
    )
}
