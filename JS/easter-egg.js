// 获取页面滚动的距离
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

// 判断页面是否滚动到一定距离后再显示彩蛋
function showEasterEgg() {
    var easterEgg = document.querySelector('.easter-egg');
    if (getScrollTop() > 100) {
        easterEgg.style.opacity = '1';
    } else {
        easterEgg.style.opacity = '0';
    }
}

// 监听页面滚动事件
window.addEventListener('scroll', function() {
    showEasterEgg();
});

// 初次加载时显示或隐藏彩蛋
showEasterEgg();