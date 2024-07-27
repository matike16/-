function showModal() {
    let modal = document.getElementById('myModal');
    let iframe = document.getElementById('myIframe');
    modal.style.display = 'block';
    setTimeout(function () {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.opacity = '1';
        iframe.style.opacity = '1';
    }, 100);
}

function hideModal() {
    let modal = document.getElementById('myModal');
    let iframe = document.getElementById('myIframe');
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.opacity = '0';
    iframe.style.opacity = '0';
    setTimeout(function () {
        modal.style.display = 'none';
    }, 500);
}

// 返回上一页
function goBack() {
    window.history.back();
}

















