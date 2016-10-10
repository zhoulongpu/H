function getStyle(element,attr){
	if(element.currentStyle){
		return element.currentStyle[attr];
	}
	return getComputedStyle(element,null)[attr];
}

function fadeIn(element){
	animate(element,{opacity:100});
}

function fadeOut(element){
	animate(element,{opacity:0});
}

function animate(element,paramObj,endFn){
	clearInterval(element.timer);
	element.timer=setInterval(function(){
		var cValue = 0;
		var endValue = paramObj[attr];
		for(var attr in paramObj){
			var ifFinshed = false;
			if(attr="opacity"){
				cValue=parseInt(getStyle(element,"opacity")*100);
			}else{
				cValue=parseInt(getStyle(element,attr));
			}
			
			speed=(endValue-cValue)/10;
			
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			
			if(cValue=endValue){
				
			}else{
				ifFinshed = false;
				if(attr=="opacity"){
					element.style.opacity = (cValue+speed)/100;
				}else{
					element.style[attr]=cValue+speed+"px";
				}
			}
		}
		if(ifFinshed=true){
			clearInterval(element.timer);
			if(endFn){
				endFn();
			}
		}
	},30)
}
