import { makeUserPremium } from "./localstorage.js";
const silverBtn = document.getElementById("silverbtn");
const goldenBtn = document.getElementById("goldenbtn");
const diamondBtn = document.getElementById("diamondbtn");
const container = document.getElementById("subscriptions");
const signUpLink = document.getElementById("signuplink")
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accountInfos") != null) {
    signUpLink.classList.add("disabled");
    signUpLink.classList.remove("active");
  }
  const localObj = JSON.parse(localStorage.getItem("accountInfos"));
  const isPaid = localObj.premium.paid;
  const isSilver = localObj.premium.isSilver;
  const isGolden = localObj.premium.isGolden;
  const isDiamond = localObj.premium.isDiamond;
  if (isPaid) {
    if (isSilver) {
      silverBtn.classList.add("disabled");
      silverBtn.textContent = "already bought";
    }
    if (isGolden) {
      silverBtn.classList.add("disabled");
      goldenBtn.classList.add("disabled");
      goldenBtn.textContent = "already bought";
    }
    if (isDiamond) {
      silverBtn.classList.add("disabled");
      goldenBtn.classList.add("disabled");
      diamondBtn.classList.add("disabled");
      diamondBtn.textContent = "already bought";
    }
  }
});

function buttonEventHandeling(button) {
  button.addEventListener("click", () => {
    const infoForm = document.createElement("form");
    infoForm.innerHTML = `
    
        
        <h3 class="text-center">Fill if you are signed up</h3>
        <div class="mb-3">
          <label for="#firstname" class="form-label text-center d-lg-inline fs-5 d-block">First name</label>
          <input type="text" id="firstname" name="firstname" placeholder="First name" class="form-control">
        </div>
        <div class="mb-3">
          <label for="#surname" class="form-label text-center d-lg-inline fs-5 d-block">Surname</label>
          <input type="text" id="surname" name="surname" placeholder="Surname" class="form-control"></div>
          <div class="mb-3">
            <label for="#password" class="form-label text-center d-lg-inline fs-5 d-block">Password</label>
            <input type="password" minlength="8" maxlength="20" id="password" name="password" placeholder="Enter password" class="form-control">
          </div>
        
      
    
        </div>
    
        <button class="btn btn-primary px-3 mx-auto mx-lg-0 d-block m-0" type="submit">Submit</button>
        `;
    infoForm.id = "subscriptionForm";
    container.insertAdjacentElement("afterbegin", infoForm);
    formSubmitEvent(infoForm);
  });
  function formSubmitEvent(infoForm) {
    infoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = infoForm.firstname.value;
      const password = infoForm.password.value;
      let plan;
      if (button.id === "silverbtn") {
        plan = "silver";
      } else if (button.id === "goldenbtn") {
        plan = "golden";
      } else {
        plan = "diamond";
      }
      makeUserPremium({
        firstname: firstName,
        password: password,
        plan: plan,
      });
      infoForm.remove();
      history.go(0);
    });
  }
}

if (localStorage.getItem("accountInfos") === null) {
  const styles = [
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "m-lg-5",
    "h-100",
  ];
  for (const style of styles) {
    container.classList.add(style);
  }
  container.innerHTML = `
     <h1 class="d-inline">First you sign up</h1>
    `;
  setTimeout(() => {
    history.go(-1);
  }, 50000);
} else {
  buttonEventHandeling(silverBtn);
  buttonEventHandeling(goldenBtn);
  buttonEventHandeling(diamondBtn);
}
