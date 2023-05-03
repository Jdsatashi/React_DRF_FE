import React from 'react'
import axios, { AxiosResponse } from 'axios'
import Data from '../components/type'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

const Index = () => {
  const [data, setData] = React.useState<Data[]>([])

  React.useEffect(() => {
    try {
      axios.get('http://localhost:8000/api/').then((respone: AxiosResponse) => setData(respone.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth='md'>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((post: Data) => (
            <Grid item key={post.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {post.title} - {post.author}
                  </Typography>
                  <Typography>{post.content}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>View</Button>
                  <Button size='small'>Edit</Button>
                  <Typography>{post.status}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Index
