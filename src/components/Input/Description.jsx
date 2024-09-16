import React from "react";
import "./input.css";

const Description = ({
  formik = {},
  id = "id",
  label = "label",
  placeholder = "",
  className = "",
  disabled = false,
  maxLength = 200,
  ...props
}) => {
  return (
    <>
      <div className={`form-item text-left ${className}`}>
        <label htmlFor={id} className={`w-100`}>
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          id={id}
          name={id}
          value={formik?.values && formik?.values[id] ? formik?.values[id] : ""}
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          disabled={disabled}
          maxLength={maxLength}
          {...props}
        />
        <small className="text-danger">
          {formik?.touched[id] && formik?.errors[id]
            ? typeof formik?.errors[id] === "string"
              ? formik?.errors[id]
              : JSON.stringify(formik?.errors[id])
            : ""}
        </small>
      </div>
    </>
  );
};

export default Description;
