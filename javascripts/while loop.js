let password = prompt("Enter your password:");
while (password !== "admin123"){
    password = prompt("Incorrect password. Please try again:");
}
alert("Welcome to the admin panel!");

