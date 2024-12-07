import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setbookMarks] = useState([]);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookMarks(newBookmarks)
    console.log(blog);

  };
  return (
    <>

      <div>
        <Header></Header>
        <div className='flex justify-between max-w-7xl mx-auto'>
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>

      </div>

    </>
  )
}
export default App
