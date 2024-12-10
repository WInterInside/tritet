const body=$("body"),navToggle=$('[data-element~="navToggle"]'),subNavToggle=$('[data-element~="subNavToggle"]'),toggleNav=()=>{body.hasClass("is-nav-open")?body.removeClass("is-nav-open"):body.addClass("is-nav-open")},toggleSubNav=()=>{body.hasClass("is-sub-nav-open")?body.removeClass("is-sub-nav-open"):body.addClass("is-sub-nav-open")},handleScroll=()=>{$(window).scrollTop()>0?body.addClass("is-scrolled"):body.removeClass("is-scrolled")};navToggle.on("click",toggleNav),subNavToggle.on("click",toggleSubNav),$(window).on("scroll",handleScroll),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));const o=document.querySelector('[data-element="header"]');if(t){let e=o.offsetHeight+30,s=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:s,behavior:"smooth"})}}))}),$(".form__input--tel").each((function(){var e;$(this).on("input focus blur keydown",(function(t){t.keyCode&&(e=t.keyCode),this.selectionStart<3&&t.preventDefault();var o="+7 (___) ___ __ __",s=0,l=o.replace(/\D/g,""),i=$(this).val().replace(/\D/g,""),n=o.replace(/[_\d]/g,(function(e){return s<i.length?i.charAt(s++):l.charAt(s++)}));-1!=(s=n.indexOf("_"))&&(s<5&&(s=3),n=n.slice(0,s));var a=o.substr(0,$(this).val().length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test($(this).val())||$(this).val().length<5||e>47&&e<58)&&$(this).val(n),"blur"==t.type&&$(this).val().length<5&&$(this).val("")}))})),$(document).on("click",'[data-elements~="tabsBtn"]',(function(e){let t=$(this).data("tab");$(this).closest('[data-elements~="tabs"]').find("[data-tab]").each((function(){$(this).toggleClass("is-active",t===$(this).data("tab"))}))})),$(document).ready((function(){var e=$(".drawings__slider"),t=$(".prev"),o=$(".next");e.each((function(e){var s=$(this);s.slick({dots:!1,arrows:!1,controls:!1,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3}),t.eq(e).on("click",(function(){s.slick("slickPrev")})),o.eq(e).on("click",(function(){s.slick("slickNext")}))}))})),$(document).ready((function(){var e=$(".big-slider"),t=$(".small-slider");e.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".small-slider"}),t.slick({slidesToShow:3,slidesToScroll:1,asNavFor:".big-slider",dots:!1,arrows:!1,centerMode:!1,focusOnSelect:!0}),$(".prev").on("click",(function(){t.slick("slickPrev")})),$(".next").on("click",(function(){t.slick("slickNext")}))})),$(document).ready((function(){var e=$(".drawings__slider"),t=$(".prev"),o=$(".next");e.each((function(e){var s=$(this);s.slick({dots:!1,arrows:!1,controls:!1,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3}),t.eq(e).on("click",(function(){s.slick("slickPrev")})),o.eq(e).on("click",(function(){s.slick("slickNext")}))}))})),$(document).ready((function(){var e=$(".project-page__slider"),t=$(".prev"),o=$(".next");e.each((function(e){var s=$(this);s.hasClass("presentation")?s.slick({dots:!0,arrows:!1,controls:!1,infinite:!0,speed:300,slidesToShow:3,adaptiveHeight:!0,autoplay:!1,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:2}},{breakpoint:900,settings:{slidesToShow:1}}]}):s.slick({dots:!0,arrows:!1,controls:!1,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!1,autoplaySpeed:3e3}),t.eq(e).on("click",(function(){s.slick("slickPrev")})),o.eq(e).on("click",(function(){s.slick("slickNext")}))}))}));
//# sourceMappingURL=../sourcemaps/01_main.js.map
