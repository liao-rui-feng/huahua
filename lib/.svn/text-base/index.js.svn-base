
//文档加载事件
$(function () {


    function lunbo(selector, boxh, w, h) {
        $(selector).slidebox({
            boxh: boxh,//盒子的高度     
            w: w,//图片的宽度      
            h: h,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    }


    lunbo("#slider", 420, 1000, 420);
    lunbo(".slider1", 220, 332, 220);
    lunbo(".slider2", 340, 428, 340);







    // 电子书右侧Hover
    $('.ebook_right li').mouseenter(function () {

        $(this).find('.newbook_hov1').removeClass('disno');
        $(this).siblings('li').find('.newbook_hov1').addClass('disno');
        $(this).find('.newbook_hov2').addClass('disno');
        $(this).siblings('li').find('.newbook_hov2').removeClass('disno');

    })

})


// 电子书左侧Hover
$('.hover_title div p').mouseenter(function () {
    $(this).addClass('title_hover');
    $(this).siblings('p').removeClass('title_hover');


})

$('#ebook .hover_title div p').mouseenter(function () {

    let index = $(this).index();
    $('.ebook_left_box').eq(index).removeClass('disno').siblings('.ebook_left_box').addClass('disno')


})

// 服装板块Hover
$('#cloth .hover_title div p').mouseenter(function () {
    let index = $(this).index();
    $('.cloth').eq(index).removeClass('disno').siblings('.cloth').addClass('disno')

})

// 户外运动Hover

$('#sport .hover_title div p').mouseenter(function () {
    let index = $(this).index();
    $('.sport').eq(index).removeClass('disno').siblings('.sport').addClass('disno')

})

// 左侧楼层导航
let bgc = ['#93D372', '#F95729', '#BA9DEF', '#FF7495', '#C3EC52']

$('.floor li').hover(function () {
    let index = $(this).index();
    $(this).css({
        'backgroundColor': bgc[index],
        'backgroundPositionX': '-40px',
        'width': '40px'
    })

}, function () {
    $(this).css({
        'backgroundColor': '',
        'backgroundPositionX': '0px',
        'width': '0px'
    })

}).click(function () {
    let index = $(this).index();
    $('body,html').stop().animate({
        'scrollTop': $('.level').eq(index).offset().top
    }, 1000)


})

// 返回顶部按钮

$('.gotop').click(function () {
    $('body,html').stop().animate({
        'scrollTop': '0px'
    }, 500)

})

// 右侧领券中心

let innerTop = parseInt(($(window).height() - $('.ticket').height()) / 2);
let newTop = $('html').scrollTop()
$('.ticket').css('top', innerTop + newTop);
$(window).scroll(function () {
    let newTop = $('html').scrollTop()
    $('.ticket').stop().animate({
        'top': innerTop + newTop
    }, 500)
})

$(window).resize(function () {
    let innerTop = parseInt(($(window).height() - $('.ticket').height()) / 2);
    let newTop = $('html').scrollTop()
    $('.ticket').stop().animate({
        'top': innerTop + newTop
    }, 500)

})

$('.erweima_hover').hover(function () {
    $('.erweima').stop().animate({
        width:100,
       left:-100
    }, 500)

}, function () {
    $('.erweima').stop().animate({
        width:39,
        left:0,
      
    }, 500)
})