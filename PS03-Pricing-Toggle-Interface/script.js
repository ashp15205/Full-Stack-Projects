function setPlan(yearly) {
    basic.innerText = yearly ? "₹5000 / yr" : "₹500 / mo";
    pro.innerText   = yearly ? "₹10000 / yr" : "₹1000 / mo";

    // toggle active button
    monthly.classList.toggle("active", !yearly);
    yearly.classList.toggle("active", yearly);
}function setPlan(yearly) {

    // Update prices
    document.getElementById("basic").innerText =
        yearly ? "₹5000 / yr" : "₹500 / mo";

    document.getElementById("pro").innerText =
        yearly ? "₹10000 / yr" : "₹1000 / mo";

    document.getElementById("premium").innerText =
        yearly ? "₹15000 / yr" : "₹1500 / mo";

    // Highlight active button
    document.getElementById("monthly").classList.toggle("active", !yearly);
    document.getElementById("yearly").classList.toggle("active", yearly);
}