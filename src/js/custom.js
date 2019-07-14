$(document).ready(function () {

    if($(window).width()>750){

        var wrapIndex = 0;
        var contentLength = $('.PageBox').length;
        var canMove = true;
        $('.wrap').on('mousewheel', function(event) {
            if(!canMove) return;
            var index = wrapIndex;
            if(event.deltaY < 0) { // 往下
                index += 1;
            }
            if(event.deltaY > 0) { // 往上
                index -= 1;
            }
            // 畫面移動不得超出上下限
            if(index < 0 || index > contentLength - 1) return;
            wrapIndex = index;
            $('.ContentBox').css({
                transform: `translate3d(0,${wrapIndex * -100}%,0)`
            });

            $('.PageBox').removeClass('animation');
            $('.PageBox').eq(index).addClass('animation');

            canMove = false;

            // 每次捲動畫面都要一定間隔
            setTimeout(function() {
                canMove = true;
            }, 500);
        });
    }

    else {
        $('.PageBox').addClass('animation');
    }

});
