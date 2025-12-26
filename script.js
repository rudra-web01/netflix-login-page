function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log(email, password); // DEBUG LINE

    if (email === "test@netflix.com" && password === "123456") {
        alert("Login successful 🎉");
        localStorage.setItem("user", email);
    } else {
        alert("Invalid credentials ❌");
    }
}
