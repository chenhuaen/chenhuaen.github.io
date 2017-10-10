/**
 * Created by Yongjin.C on 2017/10/10.
 */
$(function(){
    var toTopHeight = $(".nav").offset().top;
    var nav=$(".nav"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档
    win.scroll(function(){
        if(sc.scrollTop()>=700){
            nav.addClass("fixednav");
            $(".navTmp").fadeIn();
        }else{
            nav.removeClass("fixednav");
            $(".navTmp").fadeOut();
        }
        $("btn1").click(function () {
            $("wer1").toggle();
        });
    });
    $(".btn1").click(function () {
        $(".wer1").toggle();
    });
});