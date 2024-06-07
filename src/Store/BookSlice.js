import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
    "book/getBooks",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(`http://localhost:3005/books`);
        return res.data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

export const insertBook = createAsyncThunk(
    "book/insertBook",
    async (data, thunkAPI) => {
      const { rejectWithValue  , getState} = thunkAPI;
      try {
        console.log(getState().auth);
        data.userName = getState().auth.user
        const res = await axios.post(`http://localhost:3005/books`,
          JSON.stringify(data) 
        );
        
        return res.data;
      } catch (err) {
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
)

export const deleteBook = createAsyncThunk(
    "book/deleteBook",
    async (id, thunkAPI) => {
      const { rejectWithValue  } = thunkAPI;
      console.log(id);
      try {
        const res = await axios.delete(`http://localhost:3005/books/${id}` );
        console.log(res);
        
        return res.data;
      } catch (err) {
        console.log("da 8lt");
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  )
export const getBook = createAsyncThunk(
    "book/getBook",
    async (id, thunkAPI) => {
      const { rejectWithValue  } = thunkAPI;
      console.log(id);
      try {
        const res = await axios.get(`http://localhost:3005/books/${id}` );
        console.log(res);
        
        return res.data;
      } catch (err) {
        console.log("da 8lt");
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  )

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: null,
    isLoading: false,
    error : null,
    bookInfo:null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
       state.error = action.payload;
      })
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
        state.error= null
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = true;
        state.error= null
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const deleteBookId = action.payload.id
        console.log(action.payload);
        state.isLoading = false;
        state.books = state.books.filter((book) => book.id!==deleteBookId);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookInfo = action.payload;
      })
  },
});

export default bookSlice.reducer;
