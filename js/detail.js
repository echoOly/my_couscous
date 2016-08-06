/**
 * Created by wjy on 2016/1/18.
 */
var __NUM__ = 0;
var detail = {
    init: function() {
        this.navshow();
        this.backTotop();
        this.refresh();
    },
    // 键盘锁
    isKeyDown: false,
    // 左侧菜单
    navshow: function() {
        $('.more-one').on('click', function() {
            var _this = $(this);
            var section = $(this).closest('li.detail-navlist');
            var other = $('li.detail-navlist');
            if (!section.hasClass('activekey-one')) {
                other.removeClass('navlist-active activekey-one');
                other.children('.navul-one').slideUp();
                other.children('.navul-two').slideUp();
                other.find('.more-one').removeClass('nav-up').addClass('nav-down');
                section.children('.navul-one').slideDown();
                section.addClass('navlist-active activekey-one');
                _this.removeClass('nav-down').addClass('nav-up');
            } else {
                section.children('.navul-one').slideUp();
                section.removeClass('navlist-active activekey-one');
                _this.removeClass('nav-up').addClass('nav-down');
            }
        });
    },
    refresh: function() {
        var activeList = $('.detail-nav li');
        $.each(activeList, function(i, dom) {
            if ($(dom).hasClass('navlist-active')) {
                if ($(dom).hasClass('navlist-one')) {
                    $(dom).find('.more-one').trigger('click');
                } else {
                    $(dom).closest('.navlist-one').find('.more-one').trigger('click');
                    $(dom).addClass('navlist-active');
                }
            }
        });
        var ahref = $('.detail-navlist-title a');
        $.each(ahref, function(i, dom) {
            if ($(dom).attr('href') == '#') {
                $(dom).attr('href', 'javascript:;');
                $(dom).on('click', function() {
                    $(dom).next('.navlist-more').trigger('click');
                });
            }
        });
    },
    // 向上返回按钮
    backTotop: function() {
        var offset = 600,
            scroll_top_duration = 0,
            $back_to_top = $('.btn-backtotop');
        //hide or show the "back to top" link
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.show(): $back_to_top.hide();
        });
        //smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    }
};

detail.init();
