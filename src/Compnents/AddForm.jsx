import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../Store/BookSlice";

export default function AddForm() {
    const {isLoggIn}= useSelector(state => state.auth)
let dispatch = useDispatch()
  let formik = useFormik({
    initialValues: {
      title: "",
      dd: "",
      price: "",
    },
    onSubmit: (values) => {
        console.log(JSON.stringify(values));
        dispatch(insertBook(values));
    },
  });
  return (
    <div className="w-50 mx-auto border-bottom border-1 py-5 ">
      <h1>Insert Book</h1>
      <form onSubmit={formik.handleSubmit} >
        <div className="d-flex flex-column my-2">
          <label htmlFor="title">Title</label>
          <input
            className="form-control mt-2"
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="d-flex flex-column my-2">
          <label htmlFor="price">Price</label>
          <input
           className="form-control mt-2"
         
            type="number"
            maxlength ="4"
            pattern="\d*"
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
        <div className="d-flex flex-column my-2">
          <label htmlFor="dd">Description</label>
          <textarea
           className="form-control mt-2"
            id="dd"
            rows="4"
            cols="50"
            name="dd"
            onChange={formik.handleChange}
            value={formik.values.dd}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" disabled={!isLoggIn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
