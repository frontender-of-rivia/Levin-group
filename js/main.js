document.addEventListener("DOMContentLoaded", function(event) {
    // появление меню
    let burger = document.querySelector('.nd-hbottom__title');
    let burgerWord = document.querySelector('.nd-hbottom__title1');
    let menu = document.querySelector('.nd-menu');
    let closeIcon = document.querySelector('.nd-menu__close');
    let burgerIcon = document.querySelector('.nd-cat-desk-ico');

    burger.onclick = function(){
        if(menu.classList.contains('nd-menu--open')){
            menu.classList.remove('nd-menu--open');
            burgerWord.textContent = 'Открыть';
            burgerIcon.classList.remove('nd-cat-desk-ico-open');
            burger.classList.remove('nd-hbottom__title--menu-open');
        } else {
            menu.classList.add('nd-menu--open');
            burgerWord.textContent = 'Закрыть';
            burgerIcon.classList.add('nd-cat-desk-ico-open');
            burger.classList.add('nd-hbottom__title--menu-open');
        }
    }
    closeIcon.onclick = function(){
        menu.classList.remove('nd-menu--open');
        burgerWord.textContent = 'Открыть';
        burger.classList.remove('nd-hbottom__title--menu-open');
        burgerIcon.classList.remove('nd-cat-desk-ico-open');
    }
    // подпункты
    let ndMenuItemLists = document.querySelectorAll('.nd-menu__item-list--father');
    for(let i = 0; i < ndMenuItemLists.length; i++){
        ndMenuItemLists[i].onclick = function(){
            if(this.classList.contains('nd-menu__item-submenu--open')){
                this.classList.remove('nd-menu__item-submenu--open');
                this.querySelector('.fa-angle-down').style.transform = 'rotate(0deg)';
            } else {
                this.classList.add('nd-menu__item-submenu--open');
                this.querySelector('.fa-angle-down').style.transform = 'rotate(180deg)';
            }
        }
    }
    // кнопка ещё
    let ndMenuItemBoxes = $('.nd-menu__item-box');
    for(let i = 0; ndMenuItemBoxes.length > i; i++){
        if($(ndMenuItemBoxes[i]).children().length > 7) {
            $('<p class="more-btn">Ещё</p>').insertAfter(ndMenuItemBoxes[i]);
        }
    }
    $('.more-btn').on('click', function(){
        if($(this).hasClass('more-btn')){
            $(this).prev('.nd-menu__item-box').toggleClass(' nd-menu__item-box--open');
            $(this).html('Меньше');
            $(this).addClass('more-btn--open').removeClass('more-btn');
        } else {
            $(this).prev('.nd-menu__item-box').toggleClass(' nd-menu__item-box--open');
            $(this).html('Ещё');
            $(this).addClass('more-btn').removeClass('more-btn--open');
        }
    })





    jQuery(function($) {

        document.addEventListener( 'wpcf7mailsent', function( event ) {
            if ( '17717' == event.detail.contactFormId ) {

                $('.nd-popup .fancybox-close-small').trigger('click');

                $.fancybox.open({
                    src: '#nd-thanks',
                    type: 'inline'
                });
            }
        }, false );

        document.addEventListener( 'wpcf7spam, wpcf7mailfailed', function( event ) {
            if ( '17717' == event.detail.contactFormId ) {

                $('.nd-popup .fancybox-close-small').trigger('click');

                $.fancybox.open({
                    src: '#nd-error',
                    type: 'inline'
                });
            }
        }, false );

        $(window).scroll(function(){
            if($(this).scrollTop() > 140){
                $('.nd-hcenter__logo').addClass('nd-hcenter__logo--fixed');
                $('.nd-hcenter').addClass('nd-hcenter--fixed');
                $('.nd-hcenter__phone').addClass('nd-hcenter__phone--fixed');
                $('.nd-hcenter__search').addClass('nd-hcenter__search--fixed');
                $('.nd-hbottom__title').addClass('nd-hbottom__title--fixed');
                $('.nd-header').addClass('nd-header--fixed');
                $('.nd-menu').addClass('nd-menu--fixed');
                $('.nd-hcenter__btn2').addClass('nd-hcenter__btn2--fixed');
            }
            else if ($(this).scrollTop() < 140){
                $('.nd-hcenter__logo').removeClass('nd-hcenter__logo--fixed');
                $('.nd-hcenter').removeClass('nd-hcenter--fixed');
                $('.nd-hcenter__phone').removeClass('nd-hcenter__phone--fixed');
                $('.nd-hcenter__search').removeClass('nd-hcenter__search--fixed');
                $('.nd-hbottom__title').removeClass('nd-hbottom__title--fixed');
                $('.nd-header').removeClass('nd-header--fixed');
                $('.nd-menu').removeClass('nd-menu--fixed');
                $('.nd-hcenter__btn2').removeClass('nd-hcenter__btn2--fixed');
            }
        });

        // nd-clients__box
        $('.nd-clients__box').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: true,
            dots: true,
            edgeFriction: 0,
            appendArrows: $('.nd-clients__arrows'),
            appendDots: $('.nd-clients__dots'),
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                    }
                },
            ]
        });

        // nd-cusers__box
        let users = false;

        if (document.documentElement.clientWidth < 762) {
            users = true;
        }

        $('.nd-cusers__box').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            variableWidth: true,
            appendArrows: $('.nd-cusers__arrows'),
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay : users,
            autoplaySpeed: 1800,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
            ]
        });

        // nd-cusers__box
        $('.nd-cert__box').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            variableWidth: true,
            infinite: true,
            lazyLoad: 'ondemand',
            appendArrows: $('.nd-cert__arrows'),
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
        });

        // nd-cusers__box
        $('.nd-main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            dots: true,
            appendDots: $('.nd-main__dots'),
            arrows: false,
            autoplay : true,
            autoplaySpeed: 1800
        });

        // табы для меню
        $('.nd-tabs-wrapper').each(function() {
            let ths = $(this);
            ths.find('.nd-tab-item').not(':first').hide();
            ths.find('.nd-tab').click(function() {
                ths.find('.nd-tab').removeClass('nd-tab-active').eq($(this).index()).addClass('nd-tab-active');
                ths.find('.nd-tab-item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('nd-tab-active');
        });

        if ($('body').hasClass('home')) {

            jQuery('body').on('click', '.loc_modal .close, .loc_bg', function () {
                jQuery('.loc_modal').toggleClass('fixed');
            });

            $('.nd-htop__schema').click(function (e) {
                e.preventDefault();

                $('.loc_modal').toggleClass('fixed');

                if (!$('.loc_modal').length > 0) {
                    $('body').append('<div class="loc_modal fixed"><div class="loc_modal-inner"><!--noindex--><span class="close">x</span>			' +
                        '<h2>Схема проезда</h2>			<p><b>Адрес:</b> г.Москва, 1-й Люберецкий<br>пр-д, д. 2с4, Офис 105, 1-й этаж</p>' +
                        '<p><b>Внимание!</b> Перед приездом в офис необходимо созвониться с менеджером, чтобы заказать пропуск в БЦ</p>' +
                        '<p></p>			' +
                        '<p><b>Нас просто найти:</b> Метро «Лермонтовский проспект», первый вагон из центра, из стеклянных дверей — направо, в переходе поверните налево и пройдите до конца. Двигайтесь вдоль Октябрьского проспекта до пересечения с улицей «1-й Люберецкий проезд» 600 м., поверните направо. Дойдите до первого поворота (на Моршанскую улицу) 100 м., поверните направо — увидите каменное пятиэтажное здание. Вы на месте!</p>' +
                        '<p><b>Понедельник &#8212; пятница</b> офис работает  9:00-18:00<br />' +
                        '<b>Суббота и воскресенье</b> 11:00-17:00 &#8212; работает call-center (прием заявок по телефону и e-mail)</p><!--/noindex-->		' +
                        '<img class="loc-img" src="/wp-content/themes/lg/assets/img/c95e3487d3.jpg"><h2 class="zdanie">Схема прохода по зданию</h2>' +
                        '<img src="/wp-content/themes/lg/assets/img/schema.png" class="zdanie loc-img">' +
                        '<p style="text-align: center;margin: 0 0 10px;padding: 10px;    margin-bottom: 0;">' +
                        '<a data-fancybox data-src="#nd-call" href="javascript:void(0);" class="ft-action-btn new">Обратный звонок <i></i></a></p></div></div>' +
                        '<span class="loc_bg"></span>');
                }
                if ($(this).hasClass('zdanie')) {
                    $('.loc_modal').addClass('zdanie');
                } else {
                    $('.loc_modal').removeClass('zdanie');
                }
            });
        }

        $('.nd-popup input[type=tel], .nd-leave input[type=tel], .nd-main__form input[type=tel]').on('focus click', function (e) {
            $phone = $(this);

            if ($phone.val() === '+7 (___) ___-__-__') {
                $(this)[0].setSelectionRange(4, 4);
            }
        });

    });
});