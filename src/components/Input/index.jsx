import React from "react";
import "./input.css";

const Input = ({
  formik = {},
  id = "id",
  label = "label",
  placeholder = "",
  className = "",
  disabled = false,
  isNumber = false,
  type = "text",
  isIcon = true,
  icon ="",
  maxLength,
  style = {},
  ...props
}) => {
  const handleNumber = (e) => {
    const { name, value } = e.target;
    const re = /^[0-9\b]+$/;
    const temp = !value
      ? value
      : re.test(value)
      ? value
      : formik.values[name]
      ? formik.values[name]
      : "";
    formik.setFieldValue(name, temp ? temp.substring(0, 18) : temp);
  };

  return (
    <>
      <div className={`form-item text-left ${className}`}>
        <label htmlFor={id} className={`w-100`}>
          {label}
        </label>
        <div className="position-relative d-inline-block w-100">
          {isIcon ? (
            <span className="icon-span">
              <img src={icon} width={22} height={22} />
            </span>
          ) : null}
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={id}
            value={formik.values && formik.values[id] ? formik.values[id] : ""}
            onBlur={formik.handleBlur}
            onChange={isNumber ? handleNumber : formik.handleChange}
            disabled={disabled}
            maxLength={maxLength}
            style={{ ...style }}
            className="one-line"
            // onKeyDown={handleKeyPress}
            {...props}
          />
        </div>
        <small className="text-danger">
          {formik.touched[id] && formik.errors[id]
            ? typeof formik.errors[id] === "string"
              ? formik.errors[id]
              : JSON.stringify(formik.errors[id])
            : ""}
        </small>
      </div>
    </>
  );
};

export default Input;
