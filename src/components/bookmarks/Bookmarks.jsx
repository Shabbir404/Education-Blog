import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {


    return (

        <div className="md:w-1/3 bookmark-color-bg rounded-md ">
            <h2 className="text-3xl text-center mt-3 bg-indigo-300 p-4 rounded-xl text-indigo-700 font-bold border-indigo-700">Reading Times: {readingTime} minutes </h2>
            <h3 className="text-3xl text-center mt-2 font-bold">Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;

