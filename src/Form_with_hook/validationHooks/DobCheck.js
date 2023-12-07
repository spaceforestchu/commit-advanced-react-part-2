import { useState, useEffect } from "react";

function DobCheck() {
  const [dob, setDob] = useState(new Date());
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if (onBlur || onFocus) {
      let value = underAgeValidate(dob);

      if (!value) {
        setError("You need to be 18 and older to sign up");
      } else {
        setError(false);
      }
    }
  }, [dob]);

  function handleDobChange(e) {
    setDob(e.target.value);
  }

  function underAgeValidate(birthday) {
    // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
    var optimizedBirthday = birthday.replace(/-/g, "/");

    //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
    var myBirthday = new Date(optimizedBirthday);

    // set current day on 01:00:00 hours GMT+0100 (CET)
    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";

    // calculate age comparing current date and birthday
    var myAge = (Date.now(currentDate) - myBirthday) / 31557600000;

    if (myAge > 18) {
      return true;
    } else {
      return false;
    }
  }
  /*
    function underAgeValidate(birthday) {
    let dob = new Date(birthday);
    //calculate month difference from current date in time
    let month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    let age_dt = new Date(month_diff);

    //extract year from date
    let year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    let age = Math.abs(year - 1970);

    if (age > 18) {
      return true;
    } else {
      return false;
    }
    // }
  */

  return [dob, handleDobChange, error, setOnFocus, setOnBlur];
}

export default DobCheck;
