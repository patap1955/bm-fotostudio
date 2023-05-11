<section id="fotozone">
    <div class="fotozone">
        <div class="containers fotozone__header">
            <h2 class="fotozone__title animate__animated">Фотозоны</h2>
            <div class="fotozone__nav animate__animated">
                <ul class="nav fotozone__nav-list" id="myTab" role="tablist">
                    <li class="fotozone__nav-item" role="presentation">
                        <button class="fotozone__nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">#Rama</button>
                    </li>
                    <li class="fotozone__nav-item" role="presentation">
                        <button class="fotozone__nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">#Potret</button>
                    </li>
                    <li class="fotozone__nav-item" role="presentation">
                        <button class="fotozone__nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">#Svet</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="containers fotozone__content">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="fotozone__content-container">
                    <div class="fotozone__content-preview">
                        <img class="fotozone__content-preview-img" src="{{ asset("assets/img/rama-img1.JPG") }}">
                    </div>
                    <div class="fotozone__content-info">
                        <div class="fotozone__content-info-text">
                            <p class="fotozone__content-info-text-animate animate__animated animate__delay-03s">Вы уже поняли, почему она так называется</p>
                            <p  class="fotozone__content-info-text-animate animate__animated animate__delay-03s">Стена серого цвета с декоративными рамами, мраморным столом, мягким велюровым пуфом и креслом</p>
                        </div>
                        <div class="fotozone__content-info-button animate__animated animate__delay-06s formModal">
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                    <div class="fotozone__content-foto">
                        <div class="fotozone__content-foto-container-1">
                            <img class="fotozone__content-foto-container-1-img animate__animated animate__delay-06s" src="{{ asset("assets/img/rama-img2.JPG") }}">
                        </div>
                        <div class="fotozone__content-foto-container-2">
                            <img class="fotozone__content-foto-container-2-img animate__animated animate__delay-09s" src="{{ asset("assets/img/rama-img3.JPG") }}">
                        </div>

                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="fotozone__content-container">
                    <div class="fotozone__content-preview">
                        <img  class="fotozone__content-preview-img animate__animated" src="{{ asset("assets/img/parter-img1.JPG") }}">
                    </div>
                    <div class="fotozone__content-info">
                        <div class="fotozone__content-info-text">
                            <p>Фактурная стена светло-серого цвета. Так и хочется сделать красивый портрет со стулом в стиле ЧБ, или отснять каталог новой коллекции для шоурума или маркетплейса</p>
                        </div>
                        <div class="fotozone__content-info-button formModal">
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                    <div class="fotozone__content-foto">
                        <div class="fotozone__content-foto-container-1">
                            <img src="{{ asset("assets/img/parter-img2.JPG") }}">
                        </div>
                        <div class="fotozone__content-foto-container-2">
                            <img src="{{ asset("assets/img/parter-img3.JPG") }}">
                        </div>

                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="fotozone__content-container">
                    <div class="fotozone__content-preview">
                        <img  class="fotozone__content-preview-img animate__animated" src="{{ asset("assets/img/svet-img1.jpg") }}">
                    </div>
                    <div class="fotozone__content-info">
                        <div class="fotozone__content-info-text">
                            <p>Белый пол, большие окна наполняют полностью светом эту зону. В солнечное утро можно поиграть с тенями и сделать стильные фотокарточки для блога. Стол в африканском стиле и мягкий стул букле добавляют уюта</p>
                        </div>
                        <div class="fotozone__content-info-button formModal">
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                    <div class="fotozone__content-foto">
                        <div class="fotozone__content-foto-container-1">
                            <img src="{{ asset("assets/img/svet-img2.JPG") }}">
                        </div>
                        <div class="fotozone__content-foto-container-2">
                            <img src="{{ asset("assets/img/svet-img3.JPG") }}">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
