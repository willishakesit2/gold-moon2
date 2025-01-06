const ui = {
    overlay() {
        var html = '';

        html += '<div class="overlay" style="display: none;"></div>';

        $('body').append(html);
    },
    sidenav() {
        var html = '';
        html += '   <div class="sidenav">';
		html += '   	<ul class="mobilemenu">';
		html += '   		<li> <a href="deposit.html" onclick="alertify.alert("알림", "로그인이 필요합니다")" class="mobilemenu-item deposit-link"><i class="fa-solid fa-piggy-bank"></i> 입금신청</a> </li>';
		html += '   		<li> <a href="withdraw.html" onclick="alertify.alert("알림", "로그인이 필요합니다")" class="mobilemenu-item withdraw-link"><i class="fa-solid fa-vault"></i> 출금신청</a> </li>';
		html += '   		<li> <a href="event.html" onclick="alertify.alert("알림", "로그인이 필요합니다")" class="mobilemenu-item event-link"><i class="fa-solid fa-martini-glass-citrus"></i> 이벤트</a> </li>';
		html += '   		<li> <a href="notice.html" onclick="alertify.alert("알림", "로그인이 필요합니다")" class="mobilemenu-item notice-link"><i class="fa-solid fa-bell"></i> 공지사항</a> </li>';
		html += '   		<li> <a href="customerservice.html" onclick="alertify.alert("알림", "로그인이 필요합니다")" class="mobilemenu-item faq-link"><i class="fa-solid fa-comment-dots"></i> 고객센터</a> </li>';
        html += '   		<li> <a href="login.html" type="submit" class="btn-yellow login-btn w-100">로그인</a> </li>';
        html += '   		<li> <a href="join.html" type="button" class="w-100 btn-red join-link">회원가입</a></li>';
        html += '   	</ul>';
		html += '   </div>';
        $('body').append(html);
    }
};

$(document).ready(function () {
    $(window).width() <= 1120 && $(".wrapper").removeClass("affix"),
        $(window).resize(function () {
            $(window).width() <= 1120 && $(".wrapper").removeClass("affix");
        }),
        1121 <= $(window).width() && (480 < $(window).scrollTop() ? $(".wrapper").addClass("affix") : $(".wrapper").removeClass("affix")),
        $(window).scroll(function () {
            1121 <= $(window).width() && (480 < $(window).scrollTop() ? $(".wrapper").addClass("affix") : $(".wrapper").removeClass("affix"));
        }),
        $(".sc-btn").on("mouseover", function () {
            $(this).siblings(".sc-btn").addClass("off");
        }),
        $(".sc-btn").on("mouseout", function () {
            $(".sc-btn").removeClass("off");
        }),
        $(".slot-toggle").on("click", function () {
            $(this).addClass("active"),
                $(this).siblings("button").removeClass("active"),
                $(".slot-section").addClass("active"),
                $(".Casino-section").removeClass("active"),
                $(".sc-card").removeClass("is-flipped"),
                1180 <= $(window).width()
                    ? $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 87,
                          },
                          500
                      )
                    : $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 97,
                          },
                          500
                      );
        }),
        $(".Casino-toggle").on("click", function () {
            $(this).addClass("active"),
                $(this).siblings("button").removeClass("active"),
                $(".Casino-section").addClass("active"),
                $(".slot-section").removeClass("active"),
                $(".sc-card").addClass("is-flipped"),
                501 <= $(window).width()
                    ? $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 87,
                          },
                          500
                      )
                    : $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 97,
                          },
                          500
                      );
        });
    var e = 0;
    $(".Casino-section .sc-btn").each(function () {
        $(this).css("animation-delay", e + "s"), (e += 0.1);
    });
    var t = 0;
    $(".slot-section .sc-btn").each(function () {
        $(this).css("animation-delay", t + "s"), (t += 0.1);
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    var count = 0;
    $('.showbefore-login').click(function() {
        var _this = $(this);

        var _mobile = $('.bal-container');
        _mobile.addClass('show');
        $('.sidenav').removeClass('active');
        //$('body').addClass('modal-open');
        $('.overlay').show();
    });
    $('.showSideNav').click(function() {
        var _this = $(this);
        $('.sidenav').addClass('active');
        //$('body').addClass('modal-open');
        $('.bal-container').removeClass('show');
        $('.overlay').show();
    });

    $('html body').on('click', '.overlay', function() {
        $(this).hide();
        $('.sidenav').removeClass('active');
        //$('body').removeClass('modal-open');
        $('.bal-container').removeClass('show');
    });

    $(window).resize(function() {
        var _sidenav = $('.sidenav');
        var _overlay = $('.overlay');
        var _mobile = $('.bal-container');
        if ($(window).width() > 1280) {
            if (_sidenav.is(':visible') || _mobile.is(':visible') || _overlay.is(':visible')) {
                _sidenav.removeClass('active');
                _mobile.removeClass('show');
                _overlay.remove();
                _sidenav.remove();
                //_mobile.hide();
            }
        } else {
            if (!_sidenav.length) {
                ui.sidenav();
            }
            if (!_overlay.length) {
                ui.overlay();
            }
            if (_mobile.is(':hidden')) {
                _mobile.show();
            }
        }
    });
   
    if ($(window).width() < 1280) {
        ui.sidenav();
        ui.overlay();
    } else {
        $('.sidenav').remove();
        $('.overlay').remove();
    }

    $('html body').on('click', 'button.login-btn', function (e) {
        e.preventDefault();
        $('.before-login').removeClass('active');
        document.location.href = 'login.html';
    });
    $('html body').on('click', 'button.login-link', function (e) {
        e.preventDefault();
        document.location.href = 'login.html';
    });
    $('html body').on('click', '.action.logout', function (e) {
        e.preventDefault();
        document.location.href = 'index.html';
    });
    $('html body').on('click', '.user-avatar', function (e) {
        e.preventDefault();
        document.location.href = 'mypage.html';
    });
    $('html body').on('click', 'button.join-link', function (e) {
        e.preventDefault();
        document.location.href = 'join.html';
    });
    $('html body').on('click', 'button.login-link', function (e) {
        e.preventDefault();
        document.location.href = 'login.html';
    });
});
