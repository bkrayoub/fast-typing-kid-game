const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const Button = document.getElementById('submit');


Button.submit.addEventListener("click", (e) => {
	let form = FormData();
	form.append("username", userName)
	e.preventDefault();
	const login = "http://127.0.0.1:8000/api/register";
  
	fetch(login, {
	  method: "POST",
	  headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({
		userName: form.userName.value,
		password: form.password.value,
	  }),
	})
	  .then((response) => response.json())
	  .then((data) => {
		console.log(data);
		// code here //
		if (data.error) {
		  alert("Error Password or Username"); /*displays error message*/
		} else {
		  window.open(
			"target.html"
		  ); /*opens the target page while Id & password matches*/
		}
	  })
	  .catch((err) => {
		console.log(err);
	  });
  });


