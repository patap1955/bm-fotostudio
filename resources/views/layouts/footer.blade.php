<footer id="footer">
    <div class="containers footer">
        <div class="footer__top">
            <div class="footer__top-logo">
                <a href="{{ route('index') }}">
                    <img src="{{ asset("assets/img/logo.svg") }}">
                </a>
            </div>
            <div class="footer__top-nav">
                <ul class="nav-list nav-footer">
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
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__bottom-text">©<?=date ( 'Y' )?>, Все права защищены</p>
            <a class="footer__bottom-politics" href="{{ route('politics') }}">Политика конфиденциальности</a>
            <p class="footer__bottom-text">Сайт разработан компанией <a href="https://alex-media.ru" target="_blank">ALEX–MEDIA</a></p>
        </div>
    </div>
</footer>
