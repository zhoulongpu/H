//顶部tab切换
$(".ulas li").hover(function(){
	$(this).children("ul").css("display","block");
},function(){
	$(this).children("ul").css("display","none");
})
//地址点击事件
$(".relaa").hover(function(){
	$(this).children("div").show();
},function(){
	$(this).children("div").hide();
})


//图片滑动事件
var $Img1 = $(".fdj img");
var $img2 = $(".fdjd img")
$(".ulax li").mouseover(function(){
	$(this).css("border","1px solid #459D36");
	var index = $(this).index();
	$Img1.eq(index).stop(true).show().siblings().stop(true).hide();
	$img2.eq(index).stop(true).show().siblings().stop(true).hide();
}).mouseout(function(){
	$(this).css("border","1px solid #ccc");
})

//放大镜
var moveDiv = document.getElementById("dba");
	var originDiv = document.getElementById("fdj");
	var bigDiv = document.getElementById("fdjd");
	var scale = 0; //2
		//console.log(bigImg.clientWidth);
		//添加移动事件
		originDiv.onmousemove = function(evt) {
			var e = evt || window.event;
			var x = e.clientX - originDiv.offsetLeft - moveDiv.offsetWidth/2+ document.body.scrollLeft;
			var y = e.clientY - originDiv.offsetTop - moveDiv.offsetHeight/2+ document.body.scrollTop;
				//边界问题
			var maxx = originDiv.clientWidth - moveDiv.offsetWidth;
			var maxy = originDiv.clientHeight - moveDiv.offsetHeight;
			if(x<0) {
				x = 0;
			}
			if(x>maxx) {
				x = maxx;
			}
			if(y<0) {
				y = 0;
			}
			if(y>maxy) {
				y = maxy;
			}
			moveDiv.style.left = x + "px";
			moveDiv.style.top = y + "px";
			bigDiv.scrollLeft = x * scale; //大图需要滚动的距离
			bigDiv.scrollTop = y * scale;
		};
		//鼠标移上原图
		originDiv.onmouseover = function() {
			moveDiv.style.display = "block";
			bigDiv.style.display = "block";
			scale = 4;
		};
		originDiv.onmouseout = function() {
			moveDiv.style.display = "none";
			bigDiv.style.display = "none";
		};

//评价区tab切换
$(".lsd li").click(function(){
	var index =$(this).index();
	$(this).css({background:"#fff",borderTop:"2px solid #85BC56",borderBottom:"1px solid #fff"}).siblings().css({background:"",borderTop:"",borderBottom:""})
	$(".lix").children().eq(index).stop(true).show().siblings().stop(true).hide();
})

//列表滑动
$(".ul6 li").hover(function(){
	$(this).children("p").css("color","#000");
},function(){
	$(this).children("p").css("color","");
});
