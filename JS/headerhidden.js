// JavaScript代码，实现滚动时导航栏显示/隐藏效果
let prevScrollPos = window.pageYOffset; // 初始滚动位置
let navbar = document.querySelector('.header'); // 获取导航栏元素

window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset; // 当前滚动位置
    if (prevScrollPos > currentScrollPos) {
    // 向下滚动，导航栏向下显示
        navbar.style.transform = 'translateY(0)';
        } else {
            // 向上滚动，导航栏向上隐藏
            navbar.style.transform = 'translateY(-100%)';
        }
    prevScrollPos = currentScrollPos; // 更新滚动位置
});