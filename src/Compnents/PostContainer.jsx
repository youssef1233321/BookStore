import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBook, getBooks } from "../Store/BookSlice";
import BooksList from "./BooksList";
import BooksInfor from "./BooksInfor";

export default function PostContainer() {
  const dispatch = useDispatch();
  const {isLoading , books , bookInfo }= useSelector((state)=> state.books)
  const {isLoggIn} = useSelector((state => state.auth))
  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])
  return (
    <>
    {isLoading ? "Is Loading":       <div className="row mt-5">
        
        <div className="col-md-6 " >
          {" "}
          <BooksList books={books} isLoggIn={isLoggIn} getBook={getBook} />
        </div>
        <div className="col-md-6 ">
          {" "}
          <BooksInfor bookInfo={bookInfo}  />
        </div>
      </div>}

    </>
  );
}
