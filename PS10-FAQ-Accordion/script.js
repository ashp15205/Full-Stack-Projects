function toggle(q) {
    let ans = q.nextElementSibling;

    ans.style.display =
        ans.style.display === "block" ? "none" : "block";
}