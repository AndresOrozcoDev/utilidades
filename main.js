// JS

const handleSidebarClicked = (sidebarName) => {
    const section = document.getElementById(sidebarName);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
