import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  // mark as read time setting
  const [readingTime, setReadingTime] = useState(0);
  const markAsRead = (id, time) => {
    setReadingTime(readingTime + time)

    // remaining bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setbookMarks(remainingBookmarks)

  }

  // add to bookmarks setting
  const [bookmarks, setbookMarks] = useState([]);
  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookMarks(newBookmarks)

  };
  return (
    <>

      <div>
        <Header></Header>
        <div className='flex justify-between max-w-7xl mx-auto'>
          <Blogs markAsRead={markAsRead} handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        </div>

      </div>

    </>
  )
}
export default App
