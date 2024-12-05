import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>

      </div>

    </>
  )
}

export default App