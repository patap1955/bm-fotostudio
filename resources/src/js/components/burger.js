(function() {
    const burger = document.querySelector(".burger");
    const header = document.querySelector('.header')
    const burgerSpan = document.querySelectorAll(".burger-span")
    const headerNav = document.querySelector('.header__nav')
    const headerNavContainer = document.querySelector('.header__nav-container')
    const headerContainer = document.querySelector('.header__container')
    const headerLogo = document.querySelector('.header__logo')
    const headerNavList = document.querySelector('.header__nav-list')
    const headerNavPhone = document.querySelector('.header__nav-phone')

    burger.addEventListener('click', (e) => {
        header.classList.toggle("active")
        headerNav.classList.toggle("active")
        headerNavContainer.classList.toggle("active")
        headerContainer.classList.toggle("active")
        headerLogo.classList.toggle("active")
        headerNavList.classList.toggle("active")
        headerNavPhone.classList.toggle("active")

        // navLink.forEach((val) => {
        //     val.classList.toggle('active')
        // })

        document.querySelector(".burger").classList.toggle("active");
        document.querySelector("body").classList.toggle("lock");

        burgerSpan.forEach((val) => {
            val.classList.toggle("active");
        });
    })

  //   navLink.forEach((val) => {
  //     val.addEventListener("click", (e) => {
  //         header.classList.remove("active");
  //         mobileNav.classList.remove('active')
  //         logo.classList.remove('active')
  //         headerPhone.classList.remove('active')
  //         navList.classList.remove('active')
  //         headerNav.classList.remove('active')
  //         headerInfo.classList.remove('active')
  //         btnMobile.classList.remove('active')
  //         navLink.forEach((val) => {
  //             val.classList.remove('active')
  //         })
  //
  //         document.querySelector(".burger").classList.remove("active");
  //         document.querySelector("body").classList.remove("lock");
  //
  //         burgerSpan.forEach((val) => {
  //             val.classList.remove("active");
  //         });
  //
  //     })
  // })
})();
