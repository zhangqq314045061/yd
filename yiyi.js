$(function(){



	for(var i=0;i<4;i++){
		bannerx(i)
	}

	function bannerx(n){
		var y=$(".he")[n]
		var d=$(".shou-b")[n]
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})   
	}

	














	function aa(){
		var denglu=$(".del")[0];
		var a=$("#a");
		a.onmouseover=function(){
			animate(denglu,{height:78,width:120},200)
			denglu.style.border="1px solid #ccc";
		}
		a.onmouseout=function(){
			animate(denglu,{height:0,width:0},200)
			denglu.style.border=0;
		}
	}
	aa();


	function bb(){
		var dede=$(".dede")[0];
		var defu=$("#dede");

		defu.onmouseover=function(){
			animate(dede,{height:100,width:100},200)
			dede.style.border="1px solid #ccc";
		}
		defu.onmouseout=function(){
			animate(dede,{height:0,width:0},200)
			dede.style.border=0;}
		}
		bb();

		function bb1(){
			var box=$(".E")[0];
			var win=$(".e-e-e")[0];
			var imgs=$(".E-a");
			var left=$(".zuo-1")[0];
			var right=$(".you-1")[0];
			var width=imgs.offsetWidth;
			var flag=true;
			var t=setInterval(move,1000);
			function move(){
				if(!flag){
					return;
				}
				flag=false;
				var lif=getFirst(win);     
				animate(win,{left:-width},300,function(){
					win.appendChild(lif);     
					win.style.left=0;         
					flag=true;
				})                                       
			}
			function movez(){
				if(!flag){
					return;
				}
				flag=false;
				var lif=getFirst(win); 
				var lil=getLast(win);  
				insertBefore(lil,lif); 
				win.style.left=-width+"px";
				animate(win,{left:0},300,function(){
					flag=true;
				});  
				
			}  
			
			addEvent(left,"click",movez);
			addEvent(right,"click",move);

			addEvent(box,"mouseover",function(){
				clearInterval(t);
			}) 
			addEvent(box,"mouseout",function(){
				t=setInterval(move,1000);
			}) 
			
			

		}

		bb1();




		




























   // var shouye=$(".shou-b");
   // var  he=$(".he");
   // for(var i=0;i<shouye.length;i++){
   // shouye[i].onmouseover=function(){
   // 	animate(he,{height:38,width:258},200);

   // }
   // animate(he,{height:0,width:0},200);


   // }

   





   
   function cc(){

   	var box=$(".D-b")[0];
	// var box=$(".D-box");
	var imgs=$(".D-b-a");
	var left=$(".zuo")[0];
	var right=$(".you")[0];
	var width=parseInt(getStyle(imgs[0],"width"));
	// var yuanbox=$(".yuanbox")[0];
	var lis=$(".yuan");
	var t=setInterval(move,1000);/*建立时间函数*/
	var n=0;
	function move(){/*创建move函数*/
		n++;
		if(n>=imgs.length){/*如果n>图片长度则n=0*/
			n=0;
		}else if(n<0){如果n<0;n=图片长度减1
			n=imgs.length-1
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;/*将所需的图片的层级变为0*/
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="#000";/*将所需的点的颜色变为黑色*/
		}
		lis[n].style.background="red";/*将所需的点的颜色变为红色*/
		imgs[n].style.zIndex=1;
		/*将所需的图片的层级变为1*/
	}
	function move1(){
		n--;
		if(n<0){/*如果n>图片长度则n=0*/
			n=imgs.length-1;
		}else if(n>=imgs.length-1)
		n=0;
		
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;/*将所需的图片的层级变为0*/
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="#000";/*将所需的点的颜色变为黑色*/
		}
		lis[n].style.background="red";/*将所需的点的颜色变为红色*/
		imgs[n].style.zIndex=1;
		/*将所需的图片的层级变为1*/

	}
	box.onmouseover=function(){/*鼠标移入终止函数的运行*/
		clearInterval(t)
	}
        // 划出继续
        box.onmouseout=function(){/*鼠标移出，重新建立函数*/
        	t=setInterval(move,1000)
        }
        


        left.onclick=function(){/*左箭头点击事件*/
        	move1();
        }
        right.onclick=function(){/*右箭头点击事件*/
        	move();
        } 
        

        for(var i=0;i<lis.length;i++){
        	lis[i].index=i;
        	lis[i].onclick=function(){
        		for(var i=0;i<imgs.length;i++){
        			lis[i].style.background="#000";
        			
        		} 
        		lis[this.index].style.background="red"
        		
        		if(this.index<n){               
        			imgs[this.index].style.index=0;
        			animate(imgs[n],{left:-width},500);
        			animate(imgs[this.index],{left:0},500)
        			n=this.index;
        		}else if(this.index>n){
        			imgs[this.index].style.zIndex=1;
        			animate(imgs[n],{left:width},500);
        			animate(imgs[this.index],{left:0},500)
        			n=this.index;
        		} 
        	}
        }

    }


    cc();







    function dd(){
    	var jin=$(".A-a")[0];
    	var jinzhong=$(".jinzhong")[0];

    	jin.onmouseover=function(){
    		animate(jinzhong,{height:50,width:400},200)
    		jinzhong.style.border="1px solid blue";

    	}
    	jin.onmouseout=function(){
    		animate(jinzhong,{height:0,width:0},200)
    		jinzhong.style.border=0;}
    	}
    	dd();




   // function yiyi(){
   // 	var imgs=$(".E-a");
   // 	var box=$(".e-e-e")[0];
   // 	var width=imgs.offsetWidth;
   // 	var t=setInterval(move,1000);
   // 	function move(){
   // 		var lif=getFirst(box);
   // 		animate(box,{left:-width},300,function(){
		 //                  box.appendChild(lif);     
		 //                  box.style.left=0;         
		 //                   flag=true;})


   // 	}

   // }
})

