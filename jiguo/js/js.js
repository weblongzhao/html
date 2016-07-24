/**
 * Created by loonhs on 2016/7/8.
 */
window.onload=function () {
    var oBtn = document.getElementById('btn');
    var turn =false ;
    var time = null ;
    var scroll=document.documentElement.scrollTop||document.body.scrollTop ;
    $('.search span').toggle(function(){
        $(this).prev().animate({width:'150px','opacity':0.8} ,500)
    },function(){
        $(this).prev().animate({width:0,'opacity':0} ,500)
    })
    //返回顶部
    
    window.onscroll=function(){
        var scroll=document.documentElement.scrollTop||document.body.scrollTop ;
        if(scroll<10){
            oBtn.style.display='none'
        }else {
            oBtn.style.display = 'block'
        }
        if(turn){
            clearInterval(time)
        }
        turn =true ;
    }
    oBtn.onclick=function () {

        time=  setInterval(function(){

//                    document.body.scrollTop谷歌浏览器支持 document.documentElement.scrollTopIE以及火狐支持
            var scroll=document.documentElement.scrollTop||document.body.scrollTop ;
            var spend =Math.floor( -scroll/20 ) ;
            if(scroll==0){
                clearInterval(time)
            }

            document.documentElement.scrollTop=document.body.scrollTop=scroll+spend;
            turn =false;

        },30)

    }

}
