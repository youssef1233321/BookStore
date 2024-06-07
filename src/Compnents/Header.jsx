import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../Store/AuthSlice";

export default function Header() {
  const {error} = useSelector(state => state.books)
  const {isLoggIn}= useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <>
    {error && <div className="alert alert-danger mb-0 fw-bolder fs-4 ps-5" role="alert">
        {error}
      </div> }
     
      <nav className="navbar navbar-expand-lg bg-dark px-3 ">
        <div className="container-fluid">
          <a className="navbar-brand text-primary fs-3 fw-bolder" href="#">
            My Books
          </a>

          <button
            className="btn btn-outline-primary px-4 fw-bolder"
            type="submit"
            onClick={()=>dispatch(loginOut())}
          >
            {!isLoggIn? "login": "logout"}
          </button>
        </div>
      </nav>
    </>
  );
}
