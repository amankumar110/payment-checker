import { saveInLocal } from "./localstorage.js";
const form = document.querySelector("#signup");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = form.firstname.value;
  const surName = form.surname.value;
  const fullName = firstName.trim() + " " + surName.trim();
  const password = form.password.value;
  const ageOptions = form.adultcheck;
  let isAdult = false;
  if (
    firstName.trim() === "" ||
    surName.trim() === "" ||
    password.trim() === ""
  ) {
    alert("complete the form ");
  }
  for (const option of ageOptions) {
    if (option.checked) {
      const value = option.value;
      if (value.toLowerCase() === "yes") {
        isAdult = true;
      }
    }
  }
  let optionsLeft = 2;
  ageOptions.forEach((option) => {
    if (!option.checked) {
      optionsLeft--;
    }
    if (optionsLeft === 0) {
      alert("complete the  form");
    }
  });

  saveInLocal({
    firstname: firstName,
    surname: surName,
    fullName: fullName,
    password: password,
    isAdult: isAdult,
    premium: {
      paid: false,
      isSilver: false,
      isGolden: false,
      isDiamond: false,
    },
  });
  alert(`${fullName} has signed up`);
});