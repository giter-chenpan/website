var curId = 0;
var arrScene = ["home", "about", "service", "portfolio"];
var arrColor = ["#3498db","#9b59b6","#e67e22","#1abc9c"];
$(document).ready(function() {     //点击导航栏切换页面背景然后显示页面
    $('.main-link').each(function(index){
        $(this).attr("index", index);
        $('#'+arrScene[index]).css("opacity", 0);
        $(this).click(function(event){
            event.preventDefault();
            //判断当前页面是否处于切换状态，且被单击的页面非当前页面
            if(!TweenMax.isTweening($('body')) && curId!=$(this).attr("index")){
                TweenMax.to($('#'+arrScene[curId]),.5,{top:"100%",opacity:0});
                curId = $(this).attr("index");
                TweenMax.to($('body'),1,{backgroundColor:arrColor[curId]});
                TweenMax.to($('#'+arrScene[curId]),.5,{top:"0%", opacity:1, delay:.5});
            }
        });
 });
    //弹出层
    $('.portfolio-link').each(function(index){
        $(this).attr("index",index+1);
        $(this).click(function(e){
            e.preventDefault();
            $('#popup').addClass('show');
            $('#popup-content').addClass('show');
            //将内容复制到弹出层并显示
            $('#popup-holder').html($('#work' + $(this).attr('index')).html());
        });
    });
    //关闭弹出层
    $('#close , #popup-bg').click(function(e){
        e.preventDefault();
        $('#popup').removeClass('show');
        $('#popup-content').removeClass('show');
    });

    $(window).resize(function () {
        resizePage();
    });
    function resizePage() {
        $('#about').css('padding-top',$(window).height()*.075 + "px");
        $('#service').css('padding-top',$(window).height()*.075 + "px");
        $('#portfolio').css('padding-top',$(window).height()*.075 + "px");
    }
    resizePage();

TweenMax.to($('#home'),1,{opacity:1});  //第一次进入时首页渐显
});