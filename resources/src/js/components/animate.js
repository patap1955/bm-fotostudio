document.addEventListener("DOMContentLoaded", () => {
    // Логическая функция вывода анимация
    // elem - массив блоков или отдельный блок для анимации
    // className - класс отвечающий за анимацию

    function animate(elem, className = "animate") {
        let windowCenter = (window.innerHeight / 1) + window.scrollY; // ширина экрана * 1.1 + высота на сколько просролили экран
        elem.forEach(el => {

            let observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        return entry.target.classList.add(className);
                    }
                });
            });

            let scrollOffset = el.offsetParent.offsetTop + (el.offsetHeight / 2);
            //console.log(scrollOffset)
            if (windowCenter >= scrollOffset) {
                observer.observe(el);
            }
        });
    }

    // animate__backInDown
    const headerInfoTitle = document.querySelectorAll('.header__info-title')
    const headerInfoText = document.querySelectorAll('.header__info-text')
    const headerInfoButton = document.querySelectorAll('.header__info-button')
    const headerInfoTextLink = document.querySelectorAll('.header__info-text-link')
    const headerImgDesktop = document.querySelectorAll('.header__img-desktop')
    const aboutTitleContainer = document.querySelectorAll('.about__title-container')
    const aboutImgDesktop = document.querySelectorAll('.about__img-desktop')
    const aboutTextContainer = document.querySelectorAll('.about__text')
    const aboutInfoList = document.querySelectorAll('.about__info-item')
    const fotozoneTitle = document.querySelectorAll('.fotozone__title')
    const fotozoneNav = document.querySelectorAll('.fotozone__nav')
    const priceLeft = document.querySelectorAll('.price__left')
    const priceRight = document.querySelectorAll('.price__right')
    const priceTitle = document.querySelectorAll('.price__title')
    const priceText = document.querySelectorAll('.price__text')
    const priceRentTop = document.querySelectorAll('.price__rent-top')
    const priceRentCenter = document.querySelectorAll('.price__rent-center')
    const priceRentBottom = document.querySelectorAll('.price__rent-bottom')
    const priceButtonBlock = document.querySelectorAll('.price__button-block')
    const priceBlockImg = document.querySelectorAll('.price__block-img')
    const contactsTitle = document.querySelectorAll('.contacts__title')
    const contactsPhone = document.querySelectorAll('.contacts__phone')
    const contactsSocial = document.querySelectorAll('.contacts__social')
    const contactsFrom = document.querySelectorAll('.contacts__from')
    const map = document.querySelectorAll('.map')
    // const fotozoneContentPreview = document.querySelectorAll('.fotozone__content-preview')
    // const fotozoneContentInfoText = document.querySelectorAll('.fotozone__content-info-text-animate')
    // const fotozoneContentInfoButton = document.querySelectorAll('.fotozone__content-info-button')
    // const fotozoneContentFotoContainer1Img = document.querySelectorAll('.fotozone__content-foto-container-1-img')
    // const fotozoneContentFotoContainer2Img = document.querySelectorAll('.fotozone__content-foto-container-2-img')

    if (headerInfoTitle) animate(headerInfoTitle, 'animate__zoomIn')
    if (headerInfoText) animate(headerInfoText, 'animate__zoomIn')
    if (headerInfoButton) animate(headerInfoButton, 'animate__zoomIn')
    if (headerInfoTextLink) animate(headerInfoTextLink, 'animate__zoomIn')
    if (aboutTitleContainer) animate(aboutTitleContainer, 'animate__backInRight')
    if (aboutTextContainer) animate(aboutTextContainer, 'animate__backInRight')
    if (aboutInfoList) animate(aboutInfoList, 'animate__backInRight')
    if (aboutImgDesktop) animate(aboutImgDesktop, 'animate__backInLeft')
    if (fotozoneTitle) animate(fotozoneTitle, 'animate__backInLeft')
    if (fotozoneNav) animate(fotozoneNav, 'animate__backInRight')
    if (priceTitle) animate(priceTitle, 'animate__zoomIn')
    if (priceText) animate(priceText, 'animate__zoomIn')
    if (priceRentTop) animate(priceRentTop, 'animate__zoomIn')
    if (priceRentCenter) animate(priceRentCenter, 'animate__zoomIn')
    if (priceRentBottom) animate(priceRentBottom, 'animate__zoomIn')
    if (priceButtonBlock) animate(priceButtonBlock, 'animate__zoomIn')
    if (contactsTitle) animate(contactsTitle, 'animate__zoomIn')
    if (contactsPhone) animate(contactsPhone, 'animate__backInLeft')
    if (contactsSocial) animate(contactsSocial, 'animate__zoomIn')
    if (contactsFrom) animate(contactsFrom, 'animate__backInRight')
    if (map) animate(map, 'animate__zoomIn')
    // if (fotozoneContentPreview) animate(fotozoneContentPreview, 'animate__zoomIn')
    // if (fotozoneContentInfoText) animate(fotozoneContentInfoText, 'animate__zoomIn')
    // if (fotozoneContentFotoContainer1Img) animate(fotozoneContentFotoContainer1Img, 'animate__zoomIn')
    // if (fotozoneContentFotoContainer2Img) animate(fotozoneContentFotoContainer2Img, 'animate__zoomIn')

    if (fotozoneContentInfoButton) animate(fotozoneContentInfoButton, 'animate__zoomIn')
    if (priceBlockImg) animate(priceBlockImg, 'animate__zoomIn')
    if (priceRight) animate(priceRight, 'animate__backInRight')
    if (priceLeft) animate(priceLeft, 'animate__backInLeft')
    if (headerImgDesktop) animate(headerImgDesktop, 'animate__backInRight')
    // if (firstscreenList) animate(firstscreenList, 'animate__zoomIn')
    // if (firstScreenButton) animate(firstScreenButton, 'animate__zoomIn')
    // if (sectionTitle) animate(sectionTitle, 'animate__backInUp')
    // if (iconTitle) animate(iconTitle, 'animate__rotateIn')
    // if (aboutInfoText) animate(aboutInfoText, 'animate__zoomIn')
    // if (aboutItemAnimateLeft) animate(aboutItemAnimateLeft, 'animate__backInLeft')
    // if (aboutItemAnimateRight) animate(aboutItemAnimateRight, 'animate__backInRight')
    // if (aboutItemAnimateCenter) animate(aboutItemAnimateCenter, 'animate__zoomIn')
    // if (servicesItemInimetLeft) animate(servicesItemInimetLeft, 'animate__backInLeft')
    // if (servicesItemInimetRight) animate(servicesItemInimetRight, 'animate__backInRight')
    // if (partnersItemAnimateLeft) animate(partnersItemAnimateLeft, 'animate__backInLeft')
    // if (partnersItemAnimateRight) animate(partnersItemAnimateRight, 'animate__backInRight')
    // if (contactsInfo) animate(contactsInfo, 'animate__backInLeft')
    // if (contactsForm) animate(contactsForm, 'animate__backInRight')


    window.addEventListener("scroll", () => {
        if (headerInfoTitle) animate(headerInfoTitle, 'animate__zoomIn')
        if (headerInfoText) animate(headerInfoText, 'animate__zoomIn')
        if (headerInfoButton) animate(headerInfoButton, 'animate__zoomIn')
        if (headerInfoTextLink) animate(headerInfoTextLink, 'animate__zoomIn')
        if (aboutTextContainer) animate(aboutTextContainer, 'animate__backInRight')
        if (aboutInfoList) animate(aboutInfoList, 'animate__backInRight')
        if (aboutImgDesktop) animate(aboutImgDesktop, 'animate__backInLeft')
        if (fotozoneTitle) animate(fotozoneTitle, 'animate__backInLeft')
        if (fotozoneNav) animate(fotozoneNav, 'animate__backInRight')
        if (priceTitle) animate(priceTitle, 'animate__zoomIn')
        if (priceText) animate(priceText, 'animate__zoomIn')
        if (priceRentTop) animate(priceRentTop, 'animate__zoomIn')
        if (priceRentCenter) animate(priceRentCenter, 'animate__zoomIn')
        if (priceRentBottom) animate(priceRentBottom, 'animate__zoomIn')
        if (priceButtonBlock) animate(priceButtonBlock, 'animate__zoomIn')
        if (contactsTitle) animate(contactsTitle, 'animate__zoomIn')
        if (contactsPhone) animate(contactsPhone, 'animate__backInLeft')
        if (contactsSocial) animate(contactsSocial, 'animate__zoomIn')
        if (contactsFrom) animate(contactsFrom, 'animate__backInRight')
        if (map) animate(map, 'animate__zoomIn')
        // if (fotozoneContentPreview) animate(fotozoneContentPreview, 'animate__zoomIn')
        // if (fotozoneContentInfoText) animate(fotozoneContentInfoText, 'animate__zoomIn')
        // if (fotozoneContentFotoContainer1Img) animate(fotozoneContentFotoContainer1Img, 'animate__zoomIn')
        // if (fotozoneContentFotoContainer2Img) animate(fotozoneContentFotoContainer2Img, 'animate__zoomIn')

        if (fotozoneContentInfoButton) animate(fotozoneContentInfoButton, 'animate__zoomIn')
        if (priceBlockImg) animate(priceBlockImg, 'animate__zoomIn')
        if (priceRight) animate(priceRight, 'animate__backInRight')
        if (priceLeft) animate(priceLeft, 'animate__backInLeft')
        if (headerImgDesktop) animate(headerImgDesktop, 'animate__backInRight')
        // if (firstscreenList) animate(firstscreenList, 'animate__zoomIn')
        // if (firstScreenButton) animate(firstScreenButton, 'animate__zoomIn')
        // if (sectionTitle) animate(sectionTitle, 'animate__backInUp')
        // if (iconTitle) animate(iconTitle, 'animate__rotateIn')
        // if (aboutInfoText) animate(aboutInfoText, 'animate__zoomIn')
        // if (aboutItemAnimateLeft) animate(aboutItemAnimateLeft, 'animate__backInLeft')
        // if (aboutItemAnimateRight) animate(aboutItemAnimateRight, 'animate__backInRight')
        // if (aboutItemAnimateCenter) animate(aboutItemAnimateCenter, 'animate__zoomIn')
        // if (servicesItemInimetLeft) animate(servicesItemInimetLeft, 'animate__backInLeft')
        // if (servicesItemInimetRight) animate(servicesItemInimetRight, 'animate__backInRight')
        // if (partnersItemAnimateLeft) animate(partnersItemAnimateLeft, 'animate__backInLeft')
        // if (partnersItemAnimateRight) animate(partnersItemAnimateRight, 'animate__backInRight')
        // if (contactsInfo) animate(contactsInfo, 'animate__backInLeft')
        // if (contactsForm) animate(contactsForm, 'animate__backInRight')

    });
});
