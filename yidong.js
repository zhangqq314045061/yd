$(function(){



        function lunbo(){
          var box=$(".lunbo")[0];
          var imgs=$(".lunbo-img");
          var left=$(".hd-img-zuo")[0];
          var right=$(".hd-img-you")[0];
          var yuan=$(".hd-img-yuan");
          // console.log(imgs)
          var width=parseInt(getStyle(imgs[0],"width"));
          var t=setInterval(move,1000);
          var n=0;
          function move(){
           n++;
           if(n>=imgs.length){
            n=0;
          }
          
          for(var i=0;i<imgs.length;i++){
           imgs[i].style.zIndex=0;
           yuan[i].style.background="#f19786";
           // console.log(yuan)
         }
         imgs[n].style.zIndex=1;
         yuan[n].style.background="#ccc";
         
       }

       function move1(){
        n--;
        if(n<0){
          n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
          imgs[i].style.zIndex=0;
        }
        
        imgs[n].style.zIndex=1;
        for(var i=0;i<imgs.length;i++){
          yuan[i].style.background="#f19786"
         yuan[i].style.background="#ccc";

        }
        yuan[n].style.background="#ccc";
           yuan[n].style.background="#f19786";
        
      }


      left.onclick=function(){
        move1();
      }
      right.onclick=function(){
        move();
      } 

      box.onmouseover=function(){
        clearInterval(t)
      }
      box.onmouseout=function(){
       t=setInterval(move,1000);
     }
     for(var i=0;i<yuan.length;i++){
      yuan[i].index=i;

      yuan[i].onclick=function(){
        for(var i=0;i<imgs.length;i++){
          yuan[i].style.background="#f19786";
          imgs[i].style.zIndex=0;
        } 
        yuan[this.index].style.background="#ccc"
        imgs[this.index].style.zIndex=1;

      }
    }
    
  }
  lunbo();





 function bb1(){
    var box=$(".lunl")[0];
    var win=$(".lunl-ul")[0];
    var imgs=$(".lunl-li");
    var left=$(".left")[0];
    var right=$(".right")[0];
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





   






	
})