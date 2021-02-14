import React from "react";
import { useFormik } from "formik";

const initialValues = { name: "", age: 0, title: "" };

const onSubmit = (values) => console.log(values);

const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = "Requied";
  }
  if (!values.age) {
    error.age = "Requied";
  }
  if (!values.title) {
    error.title = "Requied";
  }
  console.log(error);
  return error;
};

const MyForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <form className="TodoForm" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        name="age"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <input type="submit" />
    </form>
  );
};

export default MyForm;
