// JS

// Method for navigate from sidebar
const handleSidebarClicked = (sidebarName) => {
    const section = document.getElementById(sidebarName);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Method for dropdown the vertical submenu
const handleDropdownClicked = (event) => {
  event.stopPropagation();
  const dropdown = document.getElementById("dropdown");
  toggleDropdown(!dropdown?.classList?.contains("open"));
};

// Method for dropdown the horizontal submenu
const handleSubMenuClicked = (menu) => {
  if (menu) {
    const subMenus = document.getElementsByClassName("sub-menu");
    for (let s of subMenus) {
      s.classList.remove("open");
    }
    const subMenu = document.getElementById(menu);
    subMenu.classList.add("open");
  }
  const mainMenu = document.getElementById("menu-inner");
  mainMenu.classList.toggle("open");
};

const toggleDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("open");
};

const toggleModal = () => {
  document.body.classList.toggle("open");
}
