(function (doc, win) {
    doc.addEventListener('touchstart',function(){});
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

            // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //     doc.getElementsByTagName('body')[0].innerHTML = '<div style="text-align:center;margin-top:10px">:)仅支持移动端访问！</div>';
            //      return false
            // }

            var clientWidth = docEl.clientWidth; 
        
                clientWidth >= 414 ? clientWidth = 414 : clientWidth; 
             
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';

            
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);


})(document, window);