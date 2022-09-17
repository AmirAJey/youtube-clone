import { Box, Stack, Typography } from "@mui/material"

const Comment = ({ snippet: {topLevelComment: {snippet}} }) => {
  return (
    <Box
      sx={{
        mb: 5
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <img
          src={snippet.authorProfileImageUrl}
          alt={snippet.authorDisplayName}
          style={{width: '50px', height: '50px', borderRadius: '50%'}}
        />
        <Typography
          variant="subtitle2"
          sx={{

          }}
        >
          {snippet.authorDisplayName}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        sx={{py: 2, px: 2}}
      >
        {snippet.textDisplay}
      </Typography>
    </Box>
  )
}

export default Comment