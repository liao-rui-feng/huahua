//文档加载事件
$(function(){
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


    lunbo(".banner_slideshow", 430, 1200, 430);
    lunbo(".the_one_box", 430, 1200, 430);


// 独家提供，选项卡
$('.the_one_title>ul>li').mouseenter(function(){
$(this).addClass('cor').siblings('li').removeClass('cor')
let index=$(this).index();
$('.the_one_lunbo').eq(index).addClass('disb').siblings('.the_one_lunbo').removeClass('disb');

})



// 新书上架，热卖畅销
$('.newbook_right ul li').mouseenter(function(){
$(this).css('height','166px').siblings('li').css('height','48px')
})




// 猜你喜欢，换一批
let index=0;
let length=$('.youlike_box').length;
$('.youlike_box').eq(0).clone(true).appendTo('.lunbo_box')
$('.youlike_title div a').click(function(){
    index++
let bh=$('.youlike_box').outerHeight();

$('.lunbo_box').stop(false,true).animate({
  top:-(index*bh)+'px'
  
},300,function(){
if(index>=length){
    index=0;
    $('.lunbo_box').css('top','0')
}

console.log(index);
})





// if(index==3){
//     index=0;
// }
// $('.youlike_box').eq(index).addClass('disb').siblings('.youlike_box').removeClass('disb')


})






































})


    