import {createSlice} from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        ids: []
    },
    reducers: {
        addBookmark: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeBookmark: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
    }
});

export const addBookmark = bookmarksSlice.actions.addBookmark;
export const removeBookmark = bookmarksSlice.actions.removeBookmark;
export default bookmarksSlice.reducer;

