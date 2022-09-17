import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  const canSubmit = searchTerm ? true : false

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        disabled={!canSubmit}
        sx={{
          p: '10px',
          color: 'red'
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar