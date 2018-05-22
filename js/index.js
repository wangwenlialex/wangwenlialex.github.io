/**
 * Created by Administrator on 2018/5/21 0021.
 */
$(function(){
//ÊÕÊ°ÇÐ»»ÂÖ²¥Í¼
//    1.ÎÞ·ìÂÖ²¥Í¼
//    2.µãÂÖ²¥Í¼
//    3.ÊÖÊÆÇÐ»»ÂÖ²¥Í¼
    var $banner=$('.sn_banner');
    var width=$banner.width();
    var $imageBox=$banner.find('ul:first');
    var $pointBox=$banner.find('ul:last');
    var $points=$pointBox.find('li');
    var animationFunc=function(){
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,function(){
            //¶¯»­Ö´ÐÐÍê³ÉµÄ»Øµ÷
            if(index>=9){
                index=1;
                //Ë²¼ä
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if (index<=0){
                index=8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            //    2.µãÂÖ²¥Í¼
            $points.removeClass('now').eq(index-1).addClass('now');
        });
    };

    //    1.ÎÞ·ìÂÖ²¥Í¼
    var index=1;
    var timer=setInterval(function(){
        index++;
        animationFunc();

    },1000);
    //    3.ÊÖÊÆÇÐ»»ÂÖ²¥Í¼
//    ×ó»¬ ÏÂÒ»ÕÅ
    $banner.on('swipeLeft',function(){
        console.log('next');
        index++;
        animationFunc();
    });
//    ÓÒ»¬ ÉÏÒ»ÕÅ
    $banner.on('swipeRight',function(){
        console.log('pre');
       index--;
        animationFunc();
    });






});