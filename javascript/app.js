const goldenDisabled = document.querySelector("#goldenDisabled");
const signUpLink = document.getElementById("signuplink")
const silverDisabled = document.querySelector("#silverDisabled");
const diamondDisabled = document.querySelector("#diamondDisabled");
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accountInfos") != null) {
    signUpLink.classList.add("disabled");
    signUpLink.classList.remove("active");
  }
  const localObj = JSON.parse(localStorage.getItem("accountInfos"));
  if (localObj.premium.paid) {
    if (localObj.premium.isSilver) {
      silverDisabled.classList.remove("disabled");
    }
    if (localObj.premium.isGolden) {
      silverDisabled.classList.remove("disabled");
      goldenDisabled.classList.remove("disabled");
    }
    if (localObj.premium.isDiamond) {
      silverDisabled.classList.remove("disabled");
      goldenDisabled.classList.remove("disabled");
      diamondDisabled.classList.remove("disabled");
    }
  }
});
