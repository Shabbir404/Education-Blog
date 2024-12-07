import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {


    return (
        <div className="md:w-1/3">
            <h3 className="text-2xl">Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;

