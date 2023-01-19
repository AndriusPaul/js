// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let username = document.getElementById("signin-username").value;
//   let password = document.getElementById("signin-password").value;
//   localStorage.setItem("user", username);
//   const login = {
//     username: username,
//     password: password,
//   };
//   //https://localhost:7121/User/id?id=1
//   //https://localhost:7121/api/UserTwo/login
//   fetch("https://localhost:7121/api/UserTwo/login", {
//     method: "POST",
//     body: JSON.stringify(login),
//     headers: {
//       Accept: "text/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       res.json();
//     })
//     .then((user) => {
//       CheckUser(user);
//       console.log(user);
//     });
// });
// function ShowBlock() {
//   var hideBlock = document.getElementById("error-message");
//   hideBlock.style.display = "block";
// }

// function onClick() {
//   var hideBlock = document.getElementById("error-message");
//   hideBlock.style.display = "none";
// }
// function CheckUser(user) {
//   if (user.status == 404) {
//     ShowBlock();
//   } else {
//     console.log(user);

//     sessionStorage.setItem("userId", user.id);

//     sessionStorage.setItem("role", user.role);

//     //   window.location.href = "login.html";
//   }
// }

const USERS = "https://localhost:7121/";
IsLoggedIn();

function IsLoggedIn() {
  let userId = sessionStorage.getItem("userId");

  if (userId != null && userId != undefined) {
    window.location.href = "login.html";
  }
}

function Login() {
  fetch(
    USERS +
      "User?username=" +
      document.getElementById("signin-username").value +
      "&password=" +
      document.getElementById("signin-password").value
  )
    .then((Response) => Response.json())

    .then((user) => {
      CheckUser(user);
    });
}

function CheckUser(user) {
  if (user.status == 404) {
    ShowBlock();
  } else {
    sessionStorage.setItem("userId", user.id);

    sessionStorage.setItem("role", user.role);

    window.location.href = "login.html";
  }
}
function ShowBlock() {
  var hideBlock = document.getElementById("error-message");
  hideBlock.style.display = "block";
}

function onClick() {
  var hideBlock = document.getElementById("error-message");
  sessionStorage.clear();
  hideBlock.style.display = "none";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  Login();
});
