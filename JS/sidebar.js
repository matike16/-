const sidebar = document.getElementById("sidebar");
let isSidebarOpen = false;
document.addEventListener("mousemove", function (e) {
    if (e.clientX <= 1 && !isSidebarOpen) {
        sidebar.classList.add("show");
        isSidebarOpen = true;
    } else if (e.clientX >= (window.innerWidth - 1) && isSidebarOpen) {
        sidebar.classList.remove("show");
        isSidebarOpen = false;
    }
});
sidebar.addEventListener("mouseleave", function () {
    if (isSidebarOpen) {
        sidebar.classList.remove("show");
        isSidebarOpen = false;
    }
});