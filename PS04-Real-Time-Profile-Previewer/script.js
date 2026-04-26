function update() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let bio = document.getElementById("bio").value;

    // EMAIL: basic format check
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        pemail.innerText = "Invalid Email";
    } else {
        pemail.innerText = email || "your@email.com";
    }

    // MOBILE: exactly 10 digits
    if (mobile && !/^[0-9]{10}$/.test(mobile)) {
        pmob.innerText = "Invalid Mobile";
    } else {
        pmob.innerText = mobile || "your mobile number";
    }
}