function t_onReady(func) {
    if (document.readyState != 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}
function t_onFuncLoad(funcName, okFunc, time) {
    if (typeof window[funcName] === 'function') {
        okFunc();
    } else {
        setTimeout(function() {
            t_onFuncLoad(funcName, okFunc, time);
        }, (time || 100));
    }
}
function t_throttle(fn, threshhold, scope) {
    return function() {
        fn.apply(scope || this, arguments);
    }
    ;
}

            (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                    (m[i].a = m[i].a || []).push(arguments)
                }
                ;
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                        return;
                    }
                }
                k = e.createElement(t),
                a = e.getElementsByTagName(t)[0],
                k.async = 1,
                k.src = r,
                a.parentNode.insertBefore(k, a)
            }
            )(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(94967868, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });

            
            window.dataLayer = window.dataLayer || [];


            (function() {
                if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent)) === false && typeof (sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y' && document.visibilityState) {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                    function t_setvisRecs() {
                        var alr = document.querySelectorAll('.t-records');
                        Array.prototype.forEach.call(alr, function(el) {
                            el.classList.add("t-records_animated");
                        });
                        setTimeout(function() {
                            Array.prototype.forEach.call(alr, function(el) {
                                el.classList.add("t-records_visible");
                            });
                            sessionStorage.setItem("visited", "y");
                        }, 400);
                    }
                    document.addEventListener('DOMContentLoaded', t_setvisRecs);
                }
            }
            )();


            function t_menuburger_init(recid) {
                var rec = document.querySelector('#rec' + recid);
                if (!rec)
                    return;
                var burger = rec.querySelector('.t-menuburger');
                if (!burger)
                    return;
                var isSecondStyle = burger.classList.contains('t-menuburger_second');
                if (isSecondStyle && !window.isMobile && !('ontouchend'in document)) {
                    burger.addEventListener('mouseenter', function() {
                        if (burger.classList.contains('t-menuburger-opened'))
                            return;
                        burger.classList.remove('t-menuburger-unhovered');
                        burger.classList.add('t-menuburger-hovered');
                    });
                    burger.addEventListener('mouseleave', function() {
                        if (burger.classList.contains('t-menuburger-opened'))
                            return;
                        burger.classList.remove('t-menuburger-hovered');
                        burger.classList.add('t-menuburger-unhovered');
                        setTimeout(function() {
                            burger.classList.remove('t-menuburger-unhovered');
                        }, 300);
                    });
                }
                burger.addEventListener('click', function() {
                    if (!burger.closest('.tmenu-mobile') && !burger.closest('.t450__burger_container') && !burger.closest('.t466__container') && !burger.closest('.t204__burger') && !burger.closest('.t199__js__menu-toggler')) {
                        burger.classList.toggle('t-menuburger-opened');
                        burger.classList.remove('t-menuburger-unhovered');
                    }
                });
                var menu = rec.querySelector('[data-menu="yes"]');
                if (!menu)
                    return;
                var menuLinks = menu.querySelectorAll('.t-menu__link-item');
                var submenuClassList = ['t978__menu-link_hook', 't978__tm-link', 't966__tm-link', 't794__tm-link', 't-menusub__target-link'];
                Array.prototype.forEach.call(menuLinks, function(link) {
                    link.addEventListener('click', function() {
                        var isSubmenuHook = submenuClassList.some(function(submenuClass) {
                            return link.classList.contains(submenuClass);
                        });
                        if (isSubmenuHook)
                            return;
                        burger.classList.remove('t-menuburger-opened');
                    });
                });
                menu.addEventListener('clickedAnchorInTooltipMenu', function() {
                    burger.classList.remove('t-menuburger-opened');
                });
            }
            t_onReady(function() {
                t_onFuncLoad('t_menuburger_init', function() {
                    t_menuburger_init('615082638');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t446_checkOverflow', function() {
                    window.addEventListener('resize', t_throttle(function() {
                        t446_checkOverflow('615082638', '0');
                    }));
                    window.addEventListener('load', function() {
                        t446_checkOverflow('615082638', '0');
                    });
                    t446_checkOverflow('615082638', '0');
                });
                t_onFuncLoad('t_menu__interactFromKeyboard', function() {
                    t_menu__interactFromKeyboard('615082638');
                });
            });
            t_onReady(function() {
                t_onFuncLoad('t_menu__highlightActiveLinks', function() {
                    t_menu__highlightActiveLinks('.t446__list_item a');
                });
            });
            t_onReady(function() {
                t_onFuncLoad('t_menu__setBGcolor', function() {
                    t_menu__setBGcolor('615082638', '.t446');
                    window.addEventListener('resize', t_throttle(function() {
                        t_menu__setBGcolor('615082638', '.t446');
                    }));
                });
            });
        
            t_onReady(function() {
                t_onFuncLoad('t446_createMobileMenu', function() {
                    t446_createMobileMenu('615082638');
                });
                t_onFuncLoad('t446_init', function() {
                    t446_init('615082638');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t694_init', function() {
                    t694_init('670478799');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t480_init', function() {
                    t480_init('617141173');
                });
            });

            function t994_luma_rgb(color) {
                var isArray = Array.isArray(color);
                if (typeof color == 'undefined') {
                    return 'black';
                }
                ;if (color.indexOf('rgb') != 0 && !isArray) {
                    return 'black';
                }
                var rgb = isArray ? color : color.split('(')[1].split(')')[0].split(',');
                if (rgb.length < 3) {
                    return 'black';
                }
                return ((0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2])) > 128 ? 'black' : 'white';
            }
            ;if (window.innerWidth < 960) {
                var loaderColor;
                var outerLoaderColor;
                loaderColor = t994_luma_rgb([34, 34, 34]);
                outerLoaderColor = loaderColor == 'black' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                var rec = document.querySelector('#rec670737326');
                if (rec) {
                    var louderOuter = rec.querySelector('.t994__loader-outer');
                    var louderInner = rec.querySelector('.t994__loader-inner');
                    if (louderOuter)
                        louderOuter.style.backgroundColor = outerLoaderColor;
                    if (louderInner)
                        louderInner.style.backgroundColor = loaderColor;
                }
            }
        
            t_onReady(function() {
                t_onFuncLoad('t994_init', function() {
                    t994_init('670737326');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t552_init', function() {
                    t552_init('670734744', '0.75');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t480_init', function() {
                    t480_init('670750176');
                });
            });

            function t994_luma_rgb(color) {
                var isArray = Array.isArray(color);
                if (typeof color == 'undefined') {
                    return 'black';
                }
                ;if (color.indexOf('rgb') != 0 && !isArray) {
                    return 'black';
                }
                var rgb = isArray ? color : color.split('(')[1].split(')')[0].split(',');
                if (rgb.length < 3) {
                    return 'black';
                }
                return ((0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2])) > 128 ? 'black' : 'white';
            }
            ;if (window.innerWidth < 960) {
                var loaderColor;
                var outerLoaderColor;
                loaderColor = t994_luma_rgb([34, 34, 34]);
                outerLoaderColor = loaderColor == 'black' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                var rec = document.querySelector('#rec670754511');
                if (rec) {
                    var louderOuter = rec.querySelector('.t994__loader-outer');
                    var louderInner = rec.querySelector('.t994__loader-inner');
                    if (louderOuter)
                        louderOuter.style.backgroundColor = outerLoaderColor;
                    if (louderInner)
                        louderInner.style.backgroundColor = loaderColor;
                }
            }
        
            t_onReady(function() {
                t_onFuncLoad('t994_init', function() {
                    t994_init('670754511');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t552_init', function() {
                    t552_init('670762060', '0.75');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t142_checkSize', function() {
                    t142_checkSize('635253767');
                });
            });
            window.addEventListener('load', function() {
                t_onFuncLoad('t142_checkSize', function() {
                    t142_checkSize('635253767');
                });
            });

            t_onReady(function() {
                var rec = document.querySelector('#rec635254142');
                if (!rec)
                    return;
                rec.setAttribute('data-animationappear', 'off');
                rec.style.opacity = 1;
                t_onFuncLoad('t390_initPopup', function() {
                    t390_initPopup('635254142');
                });
            });

            t_onReady(function() {
                t_onFuncLoad('t552_init', function() {
                    t552_init('617143832', '0.75');
                });
            });

            if (!window.mainTracker) {
                window.mainTracker = 'tilda';
            }
            setTimeout(function() {
                (function(d, w, k, o, g) {
                    var n = d.getElementsByTagName(o)[0]
                      , s = d.createElement(o)
                      , f = function() {
                        n.parentNode.insertBefore(s, n);
                    };
                    s.type = "text/javascript";
                    s.async = true;
                    s.key = k;
                    s.id = "tildastatscript";
                    s.src = g;
                    if (w.opera == "[object Opera]") {
                        d.addEventListener("DOMContentLoaded", f, false);
                    } else {
                        f();
                    }
                }
                )(document, window, '77319dca967eec3606eaf9e0c0947d46', 'script', 'https://static.tildacdn.com/js/tilda-stat-1.0.min.js');
            }, 2000);