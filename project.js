/* COOKIE */
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
}

function showCookiePopup() {
    document.getElementById('cookiePopup').style.display = 'block';
}

function acceptCookies() {
    alert("Cookies accepted!");
    document.getElementById('cookiePopup').style.display = 'none';
}

function denyCookies() {
    alert("Cookies denied!");
    document.getElementById('cookiePopup').style.display = 'none';
}

window.onload = function () {
    showCookiePopup();
};