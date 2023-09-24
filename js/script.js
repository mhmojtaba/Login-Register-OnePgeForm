const btn = document.querySelector("#btn");
const login_form = document.querySelector("#login");
const register_form = document.querySelector("#register");

// console.log(password);

const login = () => {
  register_form.style.left = "100%";
  login_form.style.right = "0";
  btn.style.right = "0";
};

const register = () => {
  register_form.style.left = "0";
  login_form.style.right = "100%";
  btn.style.right = "100px";
};

function showHide(id) {
  //   console.log(id);
  const password = document.getElementById(id);
  const toggle = document.querySelector(`.toggle-${id}`);
  if (password.type === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
  toggle.classList.toggle("active");
}
