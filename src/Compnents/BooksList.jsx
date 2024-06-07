import React from "react";
import { deleteBook } from "../Store/BookSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function BooksList({ books, isLoggIn , getBook}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-end border-1 pe-4">
        <h2>Books List</h2>
        {books == null ? (
          <div className="border border-1 p-3  bg-body-secondary">
            {" "}
            There is no books in your list{" "}
          </div>
        ) : (
          books?.map((book) => (
            <div
              key={book.id}
              className="d-flex justify-content-between align-items-center border border-1 p-3 my-4"
            >
              <p className="m-0 fs-5 fw-bolder">{book.title}</p>
              <div>
                <button className="btn btn-primary me-2 px-3" onClick={()=> dispatch(getBook(book.id))}>Read</button>
                <button
                  onClick={() =>
                    dispatch(deleteBook(book.id))
                      .unwrap()
                      .then((data) =>
                        toast.success(
                          `${data.title} has been removed by ${data.userName}`,
                          { className: "bg-success text-white" }
                        )
                      )
                      .catch((err) => toast.error(err))
                  }
                  disabled={!isLoggIn}
                  className="btn btn-danger ms-2 px-3"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
