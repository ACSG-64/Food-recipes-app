import {configureStore} from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarks";

export const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
    }
})
