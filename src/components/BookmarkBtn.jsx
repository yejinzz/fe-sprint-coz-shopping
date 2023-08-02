import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const BookmarkBtn = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  return (
    <div>
      <AiFillStar color={isBookmark ? "#FFD361" : "#DFDFDF"} />
    </div>
  );
};
export default BookmarkBtn;
