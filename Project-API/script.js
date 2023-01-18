document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("signin-username").value;
  let password = document.getElementById("signin-password").value;
  const login = {
    username: username,
    password: password,
  };
  fetch("https://localhost:7121/api/UserTwo/login", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      Accept: "text/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      alert(`Uzklausa sekminga! Welcome ${username}!`);
      window.location.replace("login.html");
    } else {
      ShowBlock();
      console.log(res);
    }
  });
});
function ShowBlock() {
  var hideBlock = document.getElementById("error-message");
  hideBlock.style.display = "block";
}

function onClick() {
  var hideBlock = document.getElementById("error-message");
  hideBlock.style.display = "none";
}
