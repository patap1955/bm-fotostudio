<header id="header">
    <div class="header">
        <div class="containers header__container">
            <div class="header__nav-phone"><a href="tel:+7 985 893-87-57">+7 985 893-87-57</a></div>
            <div class="header__logo">
                <a href="{{ route('index') }}">
                    <img class="header__logo-img" src="{{ asset("assets/img/logo.svg") }}">
                </a>
            </div>
            <div class="header__nav">
                <nav class="header__nav-container" role="navigation">
                    <ul class="nav-list header__nav-list">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">О студии</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#fotozone">Фотозоны</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#price">Прайс</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="burger">
                        <span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="burger-span burger-span-top" d="M0 0H40V4H0V0Z" fill="#5B5B5B"/>
                                <path class="burger-span burger-span-center" d="M0 12H40V16H0V12Z" fill="#5B5B5B"/>
                                <path class="burger-span burger-span-bottom" d="M0 24H40V28H0V24Z" fill="#5B5B5B"/>
                            </svg>
                        </span>
                </div>
            </div>
        </div>
    </div>
    @if($_SERVER['REQUEST_URI'] !== "/politics")
        <div class="containers">
            <div class="header__info">
                <h1 class="header__info-title">Аренда студии для вашего бизнеса</h1>
                <div class="header__info-container">
                    <div class="header__info-text-container">
                        <p class="header__info-text animate__animated animate__delay-03s">Фотостудия из трёх разных зон с фактурными стенами нейтральных оттенков, современной мебелью и зеркалами</p>
                        <div class="header__info-text-link animate__animated animate__delay-03s">
                            <a href="https://t.me/JUST_CALL_ME_MIA" target="_blank">Telegram</a>
                            <a href="https://wtsp.cc/79858938757">WhatsApp</a>
                        </div>
                    </div>
                    <div class="header__info-button animate__animated animate__delay-06s">
                        <div class="header__info-button-container">
                            <a class="header__info-button-link formModal" href="#">Оставить заявку</a>
                        </div>
                        <img class="polygon1" src="{{ asset("assets/img/polygon1.png") }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="header__img">
            <img class="header__img-desktop animate__animated" src="{{ asset("assets/img/header-img.png") }}">
            <img class="header__img-mobile animate__animated" src="{{ asset("assets/img/header-mobile.JPG") }}">
        </div>
    @endif
</header>
