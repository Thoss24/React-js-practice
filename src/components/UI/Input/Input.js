import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.emailValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.email}>{props.text}</label>
      <input
        type={props.email}
        id={props.id}
        value={props.emailValue}
        onChange={props.emailHandler}
        onBlur={props.validateEmail}
      />
    </div>
  );
};

export default Input;
