// JavaScript代码，实现平滑返回顶部的按钮功能
let scrollToTopBtn = document.querySelector('.scroll-to-top'); // 获取返回顶部按钮元素

window.addEventListener('scroll', function() {
    // 当页面滚动时，根据滚动位置控制返回顶部按钮的显示和隐藏
    if (window.pageYOffset > 100) {
        // scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        // scrollToTopBtn.style.display = 'none';
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.classList.remove("show");
        isSidebarOpen = false;
    }
    // 点击按钮时，使用平滑滚动返回页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});