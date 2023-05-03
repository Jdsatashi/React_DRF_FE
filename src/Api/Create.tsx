import axios from 'axios'
import React, { useState } from 'react'
import Data from '../components/type'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

const CreatePost = () => {
  const [formData, setFormData] = useState<Data>({
    title: '',
    author: '',
    excerpt: '',
    content: '',
    status: 'draft'
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .post('http://127.0.0.1:8000/api/', formData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant='h6' gutterBottom>
            Shipping address
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={1} sm={1}>
              <TextField
                required
                id='title'
                name='title'
                label='Title'
                autoComplete={formData.title}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='author'
                name='author'
                label='Author'
                autoComplete={formData.author}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id='excerpt'
                name='excerpt'
                label='Excerpt'
                autoComplete={formData.excerpt}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='content'
                name='content'
                label='Content'
                autoComplete={formData.content}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
          </Grid>
          ={' '}
          <select name='status' id='status' value={formData.status} onChange={handleChange}>
            <option value='draft'>Draft</option>
            <option value='published'>Published</option>
          </select>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  )
}

export default CreatePost
