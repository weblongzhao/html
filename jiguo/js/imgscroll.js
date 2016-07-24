$.fn.extend({
    imgRoll:function (){
        var $_this=$(this).parent();    //  $_this=$('#out')
        var x=0;
        var anm=true;
        var n=0;
        var timer1=null;
        var imgW=$_this.find('.con img').outerWidth()+20;     //获取图片的宽度
        
        $_this.scrollLeft(imgW*4);//初始位置     //$_this=$('#out')
        //第五步：复制插入节点
//第一步：点击左
        $_this.find('.left').click(function (){
            clearInterval(timer1);
            if (anm) {

                anm=false;
                x-=4;
                if (x<5) {
                    x=$_this.find('.con img').length-4;
                    $_this.scrollLeft(imgW*(x));
                };
                move();

            };
            autoMove();
        });

        //第二步：点击右
        $_this.find('.right').click(function (){
            clearInterval(timer1);
            if (anm) {
                anm=false;
                x+=4;
                if (x>=$_this.find('.con img').length) {
                    x=5;
                    $_this.scrollLeft(imgW);
                };

                move();
            };
            autoMove();
        });
    //    鼠标移上清理定时器
        $_this.mouseover(function(){
            clearInterval(timer1);
        });
        $_this.mouseout(
            function(){
                autoMove();
            }
        )
    /*    //第五步：复制插入节点
        var fir=$_this.find('.con:first').clone();

        $_this.find('.con').append(fir);


        //第一步：点击左
        $_this.find('.left').click(function (){
            clearInterval(timer1);
            if (anm) {
                anm=false;
                x-=4;
                if (x<5) {
                    x=$_this.find('.con img').length-3;
                    $_this.scrollLeft(imgW*(x+1));
                };
                 move();
              
            };
            autoMove();
        });

        //第二步：点击右
        $_this.find('.right').click(function (){
            clearInterval(timer1);
            if (anm) {
                anm=false;
                x+=4;
                if (x>=$_this.find('.con img').length) {
                    x=5;
                    $_this.scrollLeft(imgW);
                };
                
                move();
            };
            autoMove();
        });

        //第三步：点击数字
        $_this.find('.nav li').click(function (){
            clearInterval(timer1);
            n=$_this.find('.nav li').index(this);
            x=n+1;
            move();
            autoMove();
        })
*/
        //第四步：自动走
        function autoMove(){
            timer1=setInterval(function (){
                x+=4;
                if (x>=$_this.find('.con img').length) {
                    x=4;
                    $_this.scrollLeft(0);
                }
               
                move();
            },2000)
        }
        autoMove();//进入页面执行

        //第六步：提取公用部分
        function move(){
            $_this.stop().animate({scrollLeft:imgW*x},function (){
                anm=true;
            });
        }
    }
})