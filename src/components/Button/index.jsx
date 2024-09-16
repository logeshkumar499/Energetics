import "./button.css";

const CommonButton = ({
  className = "",
  disabled = false,
  onClick = () => {},
  children,
  style = {},
  id = "",
  ...props
}) => {
  return (
    <>
      <button
        type="button"
        id={id}
        className={`black-button mt-2 ${className}`}
        onClick={() => onClick()}
        disabled={disabled}
        style={style}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default CommonButton;
