const state = {};

fetch("https://localhost:7121/User")
  .then((res) => res.json())
  .then((data) => {
    state.users = data;
    //console.log(data);
    LogIn(data);
  });

function LogIn(users) {
  users.forEach((user) => {
    const username = document.getElementById("signin-username");
    const password = document.getElementById("signin-password");
  });
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});
