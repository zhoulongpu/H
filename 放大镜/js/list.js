//nav
$(".mchov").children().mouseover(function(){
	$(this).children("div").css("display","block");
	$(this).siblings().children("div").css("display","none");
}).mouseout(function(){
	$(this).children("div").css("display","none");
	$(this).siblings().children("div").css("display","none");
})
//左侧导航
$(".splist").children().hover(function(){
	$(this).children("div").show();
	$(this).siblings().children("div").hide();
	$(this).css("background","#fff");
	
},function(){
	$(this).children("div").hide();
	$(this).css("background","");
	
})


//右侧导航
$("#list li").mousemove(function(){
		$(this).children("div").css("display","block")
		$(this).css("background","#375725");
});
$("#list li").mouseout(function(){
		$(this).children("div").css("display","none")
		$(this).css("background","");
});
//滚动到顶部
$(".lastli").click(function(){
	$("body,html").animate({scrollTop:0});
});
$(window).load(function(){
	$("body,html").animate({scrollTop:0});
})




//改变收藏和购物车的背景颜色和文字
