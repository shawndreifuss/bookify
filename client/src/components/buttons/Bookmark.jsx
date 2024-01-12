import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

const Bookmark = () => {

    const [bookmarked, setBookmarked] = useState(false);
    
    return (
    
      <button
        onClick={() => setBookmarked(!bookmarked)}
        className="btn   ml-[-4.2rem] rounded-xl h-10 w-10"
      >
        {bookmarked ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
      </button>
    );
    }  

export default Bookmark