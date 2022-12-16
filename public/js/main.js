const bars = document.getElementById("bars");
const navigation = document.getElementById("navigation");

if (bars) {
  bars.addEventListener("click", () => {
    if (navigation.className.includes("active")) {
      changeBarsIcon(true);
      navigation.classList.remove("active");
    } else {
      changeBarsIcon(false);
      navigation.classList.add("active");
    }
  });
}

function changeBarsIcon(isNavigationActive) {
  if (isNavigationActive) {
    return (bars.className = "fa fa-bars");
  }
  return (bars.className = "fa fa-times");
}

// === login and register page === //
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

if (signInButton) {
  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  if (open === "login") container.classList.remove("right-panel-active");
  else container.classList.add("right-panel-active");
}

// === edit === //
function openEdit(id) {
  // let task = document.getElementById(id);
  let edit = document.querySelector(`#edit-${id}`);
  let normal = document.querySelector(`#normal-${id}`);
  console.log("santos");

  edit.classList.toggle("show");
  normal.classList.toggle("show");
}

// === form === //
const form = document.querySelector("#task-form");
form.addEventListener('submit', e => {
  // e.preventDefault();
});