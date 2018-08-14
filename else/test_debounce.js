// 简易防抖函数

function debounce(fn, wait) {
    var timer = null;
    return function() {
        if (timer == null) {
            timer = setTimeout(fn, wait);
        }
        clearTimeout(timer);
        timer = null;
    }
}

function sendLove() {
    console.log('love');
}

var getLove = debounce(sendLove, 100);

window.addEventListener('scroll', getLove);

// 简易节流函数(我写的) wait为检测的间隔
// 存在疑问，nowDate - oldDate 为何只能输出1000的整数倍
// fn可能两种情况下触发，一是停止触发事件后，在监测间隔之后触发，另外则在不断触发事件中，超过最大时间间隔之后触发

function throttling(fn, wait, maxTime) {
    var timer = null;
    var oldDate = Date.parse(new Date);
    return function () {
        var nowDate = Date.parse(new Date);
        console.log(nowDate - oldDate);
        // 当每一次触发这个函数，存在定时器就马上清除
        if (timer !== null) {           
            clearTimeout(timer);
        }
        // 当超过最大时间间隔之后，在事件触发后必须触发执行函数
        if (nowDate - oldDate >= maxTime) {
            fn();
            oldDate = nowDate;
        }
        // 如果小于这个间隔则在检测间隔之后执行
        else {
            timer = setTimeout(fn, wait);
        }
    }
}


function sendLove() {
    console.log('love');
}

var getLove = throttling(sendLove, 500, 1000);

window.addEventListener('scroll', getLove);


// 简易节流函数(参考写法)

function throttling(fn, wait, maxTimelong) {
    var timeout = null,
        startTime = Date.parse(new Date);

    return function() {
        if (timeout !== null) clearTimeout(timeout);
        var curTime = Date.parse(new Date);
        if (curTime - startTime >= maxTimelong) {
            fn();
            startTime = curTime;
        } else {
            timeout = setTimeout(fn, wait);
        }
    }
}


