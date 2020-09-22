
// 单选，全选
$('.quanxuan').click(function () {
    let bool = $(this).prop('checked');
    if (bool == true) {
        $('.quanxuan').prop('checked', true);
        $('.danxuan').prop('checked', true);
    } else {
        $('.quanxuan').prop('checked', false);
        $('.danxuan').prop('checked', false);
    }
// 计算总价
    zongjia();

// 计算总量
    zongliang();
})


$('.danxuan').click(function () {
    let a = $('.danxuan').length;
    let b = $('.danxuan:checked').length;

    if (a == b) {
        $('.quanxuan').prop('checked', true)
    } else {
        $('.quanxuan').prop('checked', false);
    }

    // 计算总价
    zongjia();

    // 计算总量
    zongliang();
})


// 加号

$('.jiahao').click(function () {
    let num = $(this).siblings('.count').val();
    num++;
    $(this).siblings('.count').val(num);
   
    // 限制数值
   
    if (num > 200) {
        $(this).siblings('.count').val(200);
    }

     // 小计
     let a = $(this).parent().siblings('.danjia').text();
     let b = $(this).siblings('.count').val();
     $(this).parent().siblings('.xiaoji').text((a*b).toFixed(2));

     // 计算总价
    zongjia();

    // 计算总量
    zongliang();
})


// 减号
$('.jianhao').click(function () {
    let num = $(this).siblings('.count').val();

    if (num > 1) {
        num--;
        $(this).siblings('.count').val(num)
    };
       // 限制数值
    
    if (num > 200) {
        $(this).siblings('.count').val(200);
    }
 
    // 小计
    let a = $(this).parent().siblings('.danjia').text();
    let b = $(this).siblings('.count').val();
    $(this).parent().siblings('.xiaoji').text((a*b).toFixed(2));

     // 计算总价
    zongjia();

    // 计算总量
    zongliang();

})


// 数量框输入
$('.count').keyup(function () {
    if (isNaN($(this).val())) {
        $(this).val(1);
    } else if ($(this).val() > 200) {
        $(this).val(200)
    }

    // 小计
    let a = $(this).parent().siblings('.danjia').text();
    let b = $(this).val();
    $(this).parent().siblings('.xiaoji').text((a*b).toFixed(2));

        // 计算总价
        zongjia();

        // 计算总量
    zongliang();
})

// 删除单个
$('.shanchu').click(function () {
    $(this).closest('tr').remove()

        // 计算总价
        zongjia();

        // 计算总量
    zongliang();
})

// 删除选中
$('.scxz').click(function () {
    $('.danxuan:checked').closest('tr').remove()

        // 计算总价
        zongjia();

        // 计算总量
    zongliang();
})


// 小计
// $('.jiahao').click(function () {
//     let a = $(this).parent().siblings('.danjia').text();
//     let b = $(this).siblings('.count').val();
//     $(this).parent().siblings('.xiaoji').text((a*b).toFixed(2))

// })

// $('.jianhao').click(function () {
//     let a = $(this).parent().siblings('.danjia').text();
//     let b = $(this).siblings('.count').val();
//     $(this).parent().siblings('.xiaoji').text((a*b).toFixed(2))
// })




// 总价
function zongjia(){
    let sum=0;
    $('.danxuan:checked').each(function(index,dom){
    let c=$(dom).parent().siblings('.xiaoji').text()
    
    sum+=parseFloat(c);
     
    })
    $('.zongjia').text(sum.toFixed(2))
};


// 总数量
function zongliang(){
    let num=0;
    $('.danxuan:checked').each(function(index,dom){
    let d=$(dom).parent().siblings('td').find('.count').val()
    num+=parseInt(d);
     
    })
   
    $('.zongliang').text(num)

};
