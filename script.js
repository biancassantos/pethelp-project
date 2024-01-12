function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    let icon = document.querySelector('.menu-icon')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        icon.src = 'assets/menu-burger.svg'
    } else {
        menuMobile.classList.add('open')
        icon.src = 'assets/cross.svg'
    }
}