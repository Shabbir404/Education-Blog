import PropTypes from 'prop-types';
import { MdBookmarkAdd } from "react-icons/md";
const Blog = ({ blog, handleBookmarks, markAsRead }) => {

    const { id, title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

    return (
        <div className='w-11/12 mb-14'>
            <img className='rounded-lg w-full bg-cover' src={cover} alt={`cover for title ${title}`} />
            <div className='flex justify-between mt-3 mb-3'>
                <div className='flex justify-between  mt-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6 '>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-slate-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <span className='text-slate-500 text-2xl'>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2 text-2xl'> <MdBookmarkAdd /></button>
                </div>
            </div>
            <h2 className=' text-4xl font-bold mb-2'>{title}</h2>
            <p>{
                hashtags.map((hash, i) => <span className='text-gray-500 underline ml-2' key={i}><a href="">{hash}</a></span>)
            }</p>
            <button onClick={() => markAsRead(id, reading_time)} className='mt-2 text-violet-600 underline'>Mark as read</button>
        </div >
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    markAsRead: PropTypes.func

}

export default Blog;