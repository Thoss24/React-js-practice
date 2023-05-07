import React, { useState, useEffect, useReducer, useContext } from "react";

import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  console.log(state, action);
  if (action.type === "EMAIL_CHANGE") {
    return { val: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "EMAIL_VALID") {
    return { val: state.val, isValid: state.val.includes("@") };
  }
  return {
    val: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_CHANGE') {
    return {val: action.val, isValid: action.val.trim().length > 6}
  }
  if (action.type === 'PASSWORD_VALID') {
    return {val: state.val, isValid: state.val.trim().length > 6}
  }
  return {val: '', isValid: false}
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const ctx = useContext(AuthContext)

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    val: "",
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    val: '',
    isValid: null
  });

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity')
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier)
    };
  }, [emailIsValid, passwordIsValid]);
  {
    /*setFormIsValid re-runs every time enteredMail and enteredPassword change because of useEffect*/
  }

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_CHANGE", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_CHANGE', val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_VALID" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_VALID'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
