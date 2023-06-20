import React from "react";
import ReviewList from "../reviews/ReviewList";
import ReviewResult from "../user-reviews/reviews-result";

function Bookmark() {
  return(
    <div> 
      <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Bookmark</h2>
          <ReviewResult/>
          <ReviewList/>
      </div>
    </div>
  );
 };
 export default Bookmark;