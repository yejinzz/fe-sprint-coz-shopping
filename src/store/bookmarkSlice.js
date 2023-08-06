import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    addBookmark(state, action) {
      const bookmarkData = JSON.parse(localStorage.getItem("bookmarked"));

      if (!Array.isArray(bookmarkData)) {
        state = []; // 즐겨찾기 데이터가 없거나 유효하지 않은 경우 빈 배열로 초기화
      } else if (!bookmarkData.includes(action.payload)) {
        state = [...bookmarkData, action.payload];
      }

      localStorage.setItem("bookmarked", JSON.stringify(state));
    },

    removeBookmark(state, action) {
      const bookmarkData = localStorage.getItem("bookmarked");

      const data = JSON.parse(bookmarkData).filter(
        (bookmark) => bookmark.id !== action.payload.id
      );
      state = data;
      console.log(data);
      localStorage.setItem("bookmarked", JSON.stringify(data));
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
