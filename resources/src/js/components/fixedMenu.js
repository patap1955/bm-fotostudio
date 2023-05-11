(() => {
    const navbar = document.querySelector(".header")
    const headerContainer = document.querySelector(".header__container")

    const mQuery = window.matchMedia('(min-width: 769px)')

    if (mQuery.matches) {
        if (window.scrollY >= 100) {
            scrollMenu()
        }

        window.addEventListener("scroll", e => {
            scrollMenu()
        })
    }

    function scrollMenu () {
        if(scrollY > 200) {
            navbar.classList.add("navbar_scrolled")
            headerContainer.classList.add('navbar_scrolled')

        } else {
            navbar.classList.remove("navbar_scrolled")
            headerContainer.classList.remove('navbar_scrolled')
        }
    }
})()
