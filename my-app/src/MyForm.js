import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const MyForm = () => {
  // Formik setup with useFormik hook and validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema, // Add validation schema
    onSubmit: (values) => {
      // Handle form submission
      alert('Form Submitted: ' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div >{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Submit button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;