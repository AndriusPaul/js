const state = {};

fetch("https://localhost:7121/User")
  .then((res) => res.json())
  .then((data) => {
    state.users = data;
    console.log(data);
  });

function LogIn(users) {
  users.forEach((user) => {
    const username = user.username;
    const password = user.password;
    const role = user.role;

    if (username == user.username && password == user.password) {
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        documen;
      });
    }
  });
}
