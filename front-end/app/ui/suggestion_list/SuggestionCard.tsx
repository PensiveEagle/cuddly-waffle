import { SuggestionField } from "@/app/lib/definitions";
import { Box, Card, CardContent, Typography } from "@mui/material";

type Props = {
    suggestion: SuggestionField
};

export default function SuggestionCard({ suggestion }: Props) {
    return (
        <Card className="mb-2">
            <Box className="bg-primary h-4"></Box>
            <CardContent className="bg-stone-100 dark:bg-stone-700 dark:text-white">
                <Typography className="text-left align-middle">{suggestion.suggestion_details}</Typography>
            </CardContent>
        </Card>
    )
}