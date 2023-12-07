import React from "react";
import ErrorMessage from "../error/ErrorMessage.jsx";

import InputCheck from "../validationHooks/InputCheck";
import UsernameCheck from "../validationHooks/UsernameCheck";
import EmailCheck from "../validationHooks/EmailCheck";
import PasswordCheck from "../validationHooks/PasswordCheck";
import DobCheck from "../validationHooks/DobCheck";
import GenderCheck from "../validationHooks/GenderCheck";

import "./Form.css";

function Form() {
  const [
    firstNameInput,
    firstNameHandleOnChange,
    firstNameError,
    setOnFirstNameFocus,
    setOnFirstNameBlur,
  ] = InputCheck("First Name");

  const [
    lastNameInput,
    lastNameHandleOnChange,
    lastNameError,
    setOnLastNameFocus,
    setOnLastNameBlur,
  ] = InputCheck("Last Name");

  const [
    usernameInput,
    usernameHandleOnChange,
    usernameError,
    setOnusernameFocus,
    setOnusernameBlur,
  ] = UsernameCheck();

  const [
    emailInput,
    emailHandleOnChange,
    emailError,
    setOnEmailFocus,
    setOnEmailBlur,
  ] = EmailCheck();

  const [
    passwordInput,
    passwordHandleOnChange,
    passwordError,
    setOnPasswordFocus,
    setOnPasswordBlur,
    confirmPassword,
    handleConfirmPassword,
  ] = PasswordCheck();

  const [dob, handleDobChange, dobError, setDobFocus, setDobBlur] = DobCheck();

  const [genderInput, handleOnGenderChange] = GenderCheck("");

  return (
    <div className="form-container">
      <div className="form-div">
        <div className="form-h1">
          <h1>Form</h1>
        </div>
        <form>
          <div className="form-input-container">
            <div>
              <input
                className={`form-input ${
                  firstNameError ? "form-input-error" : undefined
                }`}
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={firstNameInput}
                onChange={firstNameHandleOnChange}
                onFocus={() => setOnFirstNameFocus(true)}
                onBlur={() => setOnFirstNameBlur(true)}
              />
            </div>
            {firstNameError && <ErrorMessage errorMessage={firstNameError} />}
          </div>
          <div className="form-input-container">
            <div>
              <input
                className={`form-input ${
                  lastNameError ? "form-input-error" : undefined
                }`}
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={lastNameInput}
                onChange={lastNameHandleOnChange}
                onFocus={() => setOnLastNameFocus(true)}
                onBlur={() => setOnLastNameBlur(true)}
              />
            </div>
            {lastNameError && <ErrorMessage errorMessage={lastNameError} />}
          </div>
          <div className="form-input-container">
            <div>
              <input
                className={`form-input ${
                  usernameError ? "form-input-error" : undefined
                }`}
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                value={usernameInput}
                onChange={usernameHandleOnChange}
                onFocus={() => setOnusernameFocus(true)}
                onBlur={() => setOnusernameBlur(true)}
              />
            </div>
            {usernameError && <ErrorMessage errorMessage={usernameError} />}
          </div>
          <div className="form-input-container">
            <div>
              <input
                className={`form-input ${
                  emailError ? "form-input-error" : undefined
                }`}
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={emailInput}
                onChange={emailHandleOnChange}
                onFocus={() => setOnEmailFocus(true)}
                onBlur={() => setOnEmailBlur(true)}
              />
            </div>
            {emailError && <ErrorMessage errorMessage={emailError} />}
          </div>

          <div className="form-input-container">
            <div>
              <input
                className={`form-input ${
                  passwordError ? "form-input-error" : undefined
                }`}
                type="text"
                placeholder="Password"
                name="password"
                id="password"
                value={passwordInput}
                onChange={passwordHandleOnChange}
                onFocus={() => setOnPasswordFocus(true)}
                onBlur={() => setOnPasswordBlur(true)}
              />
            </div>
            {passwordError && <ErrorMessage errorMessage={passwordError} />}
          </div>

          <div className="form-input-container">
            <div>
              {" "}
              <input
                className="form-input"
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
            </div>

            {passwordError && <ErrorMessage errorMessage={passwordError} />}
          </div>

          <div className="float-left">
            <div className="dob-container">
              <label htmlFor="start">DOB:</label>

              <input
                className="form-input-date"
                type="date"
                id="start"
                name="trip-start"
                value={dob}
                onChange={handleDobChange}
                onFocus={() => setDobFocus(true)}
                onBlur={() => setDobBlur(true)}
              />
            </div>
            <div className="clear"></div>
            <div>{dobError && <ErrorMessage errorMessage={dobError} />}</div>
          </div>
          <div className="clear"></div>
          <div className="form-input-container float-left">
            <div className="gender-container">
              {["male", "female", "other"].map((item, index) => {
                return (
                  <label className="radio-inline" key={index}>
                    <input
                      type="radio"
                      value={item}
                      name={item}
                      onChange={handleOnGenderChange}
                      checked={item === genderInput}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="clear"></div>
          <div className="button-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
