/**
 * Created by Administrator on 2018/5/21 0021.
 */
$(function(){
//��ʰ�л��ֲ�ͼ
//    1.�޷��ֲ�ͼ
//    2.���ֲ�ͼ
//    3.�����л��ֲ�ͼ
    var $banner=$('.sn_banner');
    var width=$banner.width();
    var $imageBox=$banner.find('ul:first');
    var $pointBox=$banner.find('ul:last');
    var $points=$pointBox.find('li');
    var animationFunc=function(){
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,function(){
            //����ִ����ɵĻص�
            if(index>=9){
                index=1;
                //˲��
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if (index<=0){
                index=8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            //    2.���ֲ�ͼ
            $points.removeClass('now').eq(index-1).addClass('now');
        });
    };

    //    1.�޷��ֲ�ͼ
    var index=1;
    var timer=setInterval(function(){
        index++;
        animationFunc();

    },1000);
    //    3.�����л��ֲ�ͼ
//    �� ��һ��
    $banner.on('swipeLeft',function(){
        console.log('next');
        index++;
        animationFunc();
    });
//    �һ� ��һ��
    $banner.on('swipeRight',function(){
        console.log('pre');
       index--;
        animationFunc();
    });






});