
    document.getElementById("searchBtn").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const tools = document.querySelectorAll(".Side button");
    let found = false;

    tools.forEach(btn => {
        const text = btn.textContent.toLowerCase();
    if (text.includes(query) && query.trim() !== "") {
        found = true;
    btn.scrollIntoView({behavior: "smooth", block: "center" });
    btn.style.backgroundColor = "#51a7cf";
    btn.style.transform = "scale(1.1)";
            setTimeout(() => {
        btn.style.backgroundColor = "rgb(0, 0, 104)";
    btn.style.transform = "scale(1)";
            }, 1200);
        }
    });

    if (!found && query.trim() !== "") {
        alert("No matching tool found!");
    }
});
