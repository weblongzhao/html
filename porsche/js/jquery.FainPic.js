﻿
$(function(){
       $.ScrollPic = function (option){
        var defaults = {
          ele: '.yiz-slider-1',
          Time: '2000',
          autoscrooll: true
        };
        
     			var opts = $.extend({}, defaults, option);
    			var PicObject = $(opts.ele);   
    			var scrollList = PicObject.find('ul');
    			var listLi = scrollList.find('li');
    			

		      	var index = 0;
				var picTimer;
				var len = PicObject.find("li").length;
 				
			    function picTimer(){
			    		showPics(index);
			            index++;
						if(index == len){index=0;}
				        
				}//自动切换函数
				if(opts.autoscrooll){var time = setInterval(picTimer,opts.Time)}

				 function showPics(index){
				 	listLi.hide();
					listLi.eq(index).fadeIn(500).siblings().hide();
					PicObject.find(paging).eq(index).addClass('current').siblings().removeClass('current');
			     }//动画函数


			    PicObject.append('<div class="yiz-page-btn"></div>')
				for(i=1;i<=len;i++){
					PicObject.find('.yiz-page-btn').append('<span>'+i+'</span>')
				}
				var paging = PicObject.find(".yiz-page-btn span");  
				paging.eq(index).addClass('current')
				PicObject.find(paging).mouseover(function(){
					index = PicObject.find(paging).index($(this));
					showPics(index)
				});//鼠标经过1、2、3、4的效果

				PicObject.hover(function(){
					clearInterval(time); 
				},function(){
					if(opts.autoscrooll){ time = setInterval(picTimer,opts.Time);}else{clearInterval(time)}
				});//清除计时器
    }
});
