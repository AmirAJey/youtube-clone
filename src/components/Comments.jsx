import { Box } from '@mui/material'
import {Comment} from "./"
const Comments = ({ comments }) => {
  return (
    <Box>
      {
        comments.map((comment, idx) => (
          <Comment key={idx} {...comment} />
        ))
      }
    </Box>
  )
}

export default Comments