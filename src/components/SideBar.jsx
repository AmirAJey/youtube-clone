import { Stack, Typography } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory, setVideos }) => {
  return (
    <Stack
    direction='column'
      sx={{
        height: '100%',
        borderRight: {sm: '1px solid #3d3d3d'},
        px: 2,
      }}
    >
      <Stack
        direction={{xs: 'row', sm: 'column'}}
        sx={{
          height: '100%',
          overflowY: 'auto'
        }}
      >
      {
        categories.map(category => (
          <button
            key={category.name}
            className='category-btn'
            onClick={() => {
              setSelectedCategory(category.name)
              setVideos([])
            }}
            style={{
              backgroundColor: category.name === selectedCategory ? 'red' : '',
              color: '#fff',
              marginRight: '5px'
            }}
          >
            <span
              style={{
                marginRight: '5px',
                color: category.name === selectedCategory ? '#fff' : 'red'
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))
      }
      </Stack>
      <Typography
        variant="body2"
        sx={{
          display: {xs: 'none', sm: 'grid'},
          width: '100%',
          height: '50px',
          placeItems: 'center',
          color: '#fff',
        }}
      >
        copyright 2022 AJ
      </Typography>
    </Stack>
  )
}

export default SideBar