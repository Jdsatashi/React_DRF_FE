import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Api/index.tsx'
import NavBar from './components/NavBar'
import CreatePost from './Api/Create.tsx'
import Footer from './components/Footer'

const Main = () => {
  //const [showIndex, setShowIndex] = React.useState(true)

  // const handleShowIndex = () => {
  //   setShowIndex(!showIndex)
  // }

  return (
    <>
      <React.StrictMode>
        <NavBar />
        {/* {showIndex ? <Index handleButtonClick={handleShowIndex} /> : <CreatePost handleButtonClick={handleShowIndex} />} */}
        <Index />
        <CreatePost />
        <Footer />
      </React.StrictMode>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
