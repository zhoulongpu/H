/**
 * Created by yangbin on 2016/7/26/0026.
 */
//获取非行内样式(获取当前所应用的样式包括内联样式)
function  getStyle(element,attr) {
    if(element.currentStyle) {//是IE浏览器
        return element.currentStyle[attr]; //获取某种样式的值
    }
    return getComputedStyle(element,null)[attr];
}
/*

 */
//淡入函数 fadeIn，把透明度从0变成1
function  fadeIn(element) {
    animate(element,{opacity:100});
}

//淡出fadeOut,把透明度变为0
function  fadeOut(element) {
    animate(element,{opacity:0});
}

function  animate(element,paramsObj,endFn) {
    clearInterval(element.timer);
    //使用定时器不断改变元素的属性值
    element.timer = setInterval(function () {
        //在所有的属性改变完后再清除定时器，需要一个标记变量
        //定时器某一次执行修改属性值时，设置一个标记变量标识当前这一次是否改变完成所有的属性
        //如果有任何一个属性还没有完成，left:0 ,width:150 ,还是没有完成，应该把isFinied置为false
        //执行完for循环之后则可以判定 ifFinied的值为true或者false
        //为false代表当前还有某个属性值没有完成，否则都完成了()
        var ifFinished = true; //假设都已经结束
        for(var attr in paramsObj) {
            //1.获取当前的值
            var cValue = 0;
            //取出终点值
            var endValue = paramsObj[attr];
            //检测是否是透明度
            if(attr=="opacity") {
                cValue = parseInt(getStyle(element,"opacity")*100); //0.88
            }
            else {//不是opacity属性： left,width
                cValue = parseInt(getStyle(element,attr));
            }

            //2.速度，可以为负数, left - 200px
            var speed = (endValue-cValue)/10;//可能包含小数位
            //3.进行小数位处理，避免丢失小数位，导致加起来不能得到endValue
            speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
            //4.边界处理
            //注意： 清除定时器时，clearInterval之后的代码还可能会运行
            if(cValue==endValue) {
                //只是某个属性到达终点，不代表所有的属性到达终点
            }
            else {
                ifFinished = false; //当前属性还没有到终点
                //5.改变样式
                if(attr=="opacity") {
                    element.style.opacity =  (cValue+speed)/100;
                }
                else {
                    element.style[attr] = cValue + speed + "px";
                }
            }
        }
        if(ifFinished==true) {//没有任何一个属性把 isFinished置为false
            clearInterval(element.timer);
            //执行endFn，动画结束之后执行某种操作
            if(endFn) {
                endFn();//函数不为空才调用，否则报错
            }
        }
    },30);
}