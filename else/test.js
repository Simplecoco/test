(function(win) {
    win.ecom = win.ecom || {};
    win.ecom.wise = win.ecom.wise || {};
    ecom.wise.imTimeSign = "38";
    ecom.wise.PARAMS = {
        'baiduid': '8DBB1925FD165DACA7C9E76DF01DEF62',
        'query': '',
        'searchid': '0ddd2d5e4761d192',
        'osid': '1',
        'bwsid': '5'
    };
}
)(window);
(function() {
    window.ecom.wise.global = {
        run: function(func) {
            try {
                func(window, document, window.ecom.wise, window.ecom.wise.global);
            } catch (error) {}
        }
    };
}
)();
window.ecom.wise.Ck = (function() {
    var deviceIsIOS, uniqueInstance, bd, touchStartTime, touchEndTime, pressTime, touchX, touchY, isStartScroll, scrollLastY, scrollStartY, scrollStartTime, scrollLastTime, scrollTotalTime, scrollDirection, scrollNum, scrollTotalChange, validDirection, imTimeSign, scrollBoundary = 10, numReg = /\d+/;
    function constructor() {
        bd = document.body;
        touchstartTime = 0;
        touchEndTime = 0;
        pressTime = 0;
        touchX = 0;
        touchY = 0;
        scrollLastY = 0;
        scrollStartY = 0;
        scrollStartTime = 0;
        scrollLastTime = 0;
        scrollTotalTime = 0;
        scrollDirection = 'none';
        scrollNum = 0;
        scrollTotalChange = 0;
        validDirection = 'none';
        imTimeSign = window.ecom.wise.imTimeSign;
        if (numReg.test(imTimeSign)) {
            imTimeSign = parseInt(imTimeSign, 10);
        } else {
            throw new Error('imTimeSign is not a number, imTimeSign value is ' + imTimeSign);
        }
        addListener();
        return {
            addCkOnUrl: addCkOnUrl,
            clearCount: clearCount,
        };
    }
    function addListener() {
        bd.addEventListener('touchstart', onTouchStart, true);
        bd.addEventListener('touchend', onTouchEnd, true);
        bd.addEventListener('touchmove', onTouchMove, true);
        window.addEventListener('scroll', onScrollEvent, true);
    }
    function onTouchStart(event) {
        var touch = event.touches.item(0);
        touchX = parseInt(touch.pageX, 10);
        touchY = parseInt(touch.pageY, 10);
        countScrollOnTouchStart();
        touchStartTime = getEventTime(event);
    }
    function onTouchEnd(event) {
        touchEndTime = getEventTime(event);
        pressTime = touchEndTime - touchStartTime;
    }
    function onTouchMove(event) {
        triggerScrollEventForIphone(event);
    }
    function triggerScrollEventForIphone(event) {
        onScrollEvent(event);
    }
    function onScrollEvent(event) {
        if (!isStartScroll) {
            isStartScroll = true;
            scrollStartY = window.scrollY;
        }
        var nowScrollY = window.scrollY;
        var scrollValue = Math.abs(nowScrollY - scrollLastY);
        var nowDirection = getScrollDirection(scrollLastY, nowScrollY) || scrollDirection;
        var eventTime = getEventTime(event);
        if (isValidScroll(scrollValue, nowDirection)) {
            if (eventTime > scrollLastTime) {
                scrollLastTime = eventTime;
            }
            if (validDirection == 'none') {
                validDirection = scrollDirection;
                scrollStartTime = eventTime;
            }
            if (validDirection != scrollDirection) {
                scrollCount();
                scrollStartTime = eventTime;
                validDirection = scrollDirection;
            }
        }
        scrollLastY = nowScrollY;
    }
    function countScrollOnTouchStart() {
        if (isStartScroll && validDirection != 'none') {
            scrollCount();
            scrollTotalChange = 0;
            isStartScroll = false;
            scrollDirection = 'none';
        }
    }
    function isValidScroll(scrollValue, nowDirection) {
        if (scrollDirection == 'none') {
            scrollDirection = nowDirection;
        }
        if (nowDirection != scrollDirection) {
            scrollDirection = nowDirection;
            scrollTotalChange = 0;
        } else {
            scrollTotalChange += scrollValue;
        }
        return scrollTotalChange > scrollBoundary;
    }
    function getScrollDirection(startY, nowY) {
        if (nowY > startY) {
            return 'up';
        } else if (nowY < startY) {
            return 'down';
        } else {
            return false;
        }
    }
    function scrollCount() {
        scrollNum++;
        scrollTotalTime += scrollLastTime - scrollStartTime;
        validDirection = 'none';
    }
    function getCkValue(url) {
        if (typeof url != 'string') {
            return false;
        }
        console.log(url, imTimeSign);
        var checkCode = getCheckCode(url, imTimeSign, pressTime, touchX);
        if (checkCode !== false) {
            var ckValue = [checkCode, pressTime, touchX, touchY, scrollNum, scrollTotalTime].join('.');
            clearCount();
            return ckValue;
        } else {
            return false;
        }
    }
    function addCkOnUrl(url) {
        var ckValue = getCkValue(url)
          , ckReg = /&ck=[\w.]*/;
          console.log(ckValue);
        if (ckValue === false) {
            return url;
        }
        if (url.indexOf('&ck=') == -1) {
            url += '&ck=' + ckValue;
        } else {
            url = url.replace(ckReg, '&ck=' + ckValue);
        }
        return url;
    }
    function clearCount() {
        scrollNum = 0;
        scrollTotalTime = 0;
    }
    function getCheckCode(href, imTimeSign, pressTime, touchX) {
        var urlSearch, urlReg = /\?url\=([^\.]+)\./, checkCode = 0;
        if (urlSearch = urlReg.exec(href)) {
            var num = (((pressTime * imTimeSign) % 99) + 9);
            for (var x = 0; x < num; ++x) {
                checkCode += urlSearch[1].charCodeAt((touchX * x) % urlSearch[1].length);
            }
            return checkCode;
        }
        return false;
    }
    function getEventTime(event) {
        if (event.timeStamp != 0) {
            return event.timeStamp;
        } else {
            var date = new Date();
            return date.getTime();
        }
    }
    return {
        getInstance: function() {
            if (!uniqueInstance) {
                uniqueInstance = constructor();
            }
            return uniqueInstance;
        }
    };
}
);
window.ecom.wise.global.run(function() {
    window.ecom.wise.ck = window.ecom.wise.Ck().getInstance();
});
window.ecom.wise.global.run(function() {
    var layers = document.querySelectorAll('.ec-ad');
    for (var i = layers.length - 1; i >= 0; i--) {
        layers[i].addEventListener('click', function(event) {
            addCk(event.target, layers[i]);
        }, true);
    }
    function addCk(dom, layer) {
        var currentDom = dom;
        while (currentDom != null && currentDom.tagName != 'A' && currentDom != layer) {
            currentDom = currentDom.parentNode;
        }
        if (currentDom == null) {
            return false;
        }
        if (currentDom.tagName == 'A' && currentDom.href !== '') {
            currentDom.href = window.ecom.wise.ck.addCkOnUrl(currentDom.href);
        }
    }
    ;
});
/**
 * @file 淇鐭ラ亾鍐呭椤靛洜NA鍜孒5娣锋帓閫犳垚鐨勫箍鍛婁晶瀛楀彿娓叉煋杩囧ぇbug
 * @author yangshiwei(yangshiwei@baidu.com)
 * @date 2017/08/30
 */

(function(win, doc) {
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)','i');
        var r = window.location.search.substr(1).match(reg);
        return r != null ? unescape(r[2]) : null;
    }
    var docEl = doc.documentElement;
    var baseFontSize = 100;
    var scale = getQueryString('apsFontScale');
    scale = scale ? scale : 1;
    docEl.style.fontSize = (baseFontSize * scale) + 'px';
}
)(window, document);
